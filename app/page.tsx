import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("itinerary");
  const dayByDayData = await client.getSingle("itinerary", {
    graphQuery: `
      {
        itinerary {
          ...itineraryFields
          slices {
            ...on day_by_day_itinerary {
              variation {
                ...on default {
                  primary {
                    ...primaryFields
                    locations {
                      accordion_content {
                        ...on day_by_day_accordion {
                          ...day_by_day_accordionFields
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return (
    <SliceZone
      slices={page.data.slices}
      context={dayByDayData.data.slices}
      components={components}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("itinerary");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

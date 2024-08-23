"use client";
import { useState } from "react";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Button, ButtonGroup } from "@material-tailwind/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

/**
 * Props for `TopTourSummary`.
 */
export type TopTourSummaryProps =
  SliceComponentProps<Content.TopTourSummarySlice>;

/**
 * Component for "TopTourSummary" Slices.
 */
const TopTourSummary = ({ slice }: TopTourSummaryProps): JSX.Element => {
  const [activeYear, setActiveYear] = useState(slice.primary.year[0]?.year);

  const handleChangeActiveYear = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setActiveYear(value);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-2">
        <PrismicNextImage
          field={slice.primary.top_tour_image}
          className="h-full"
        />
        <div className="px-10 py-5 flex flex-col gap-4 justify-center">
          <section className="flex gap-3 items-center">
            <DateRangeIcon className="text-secondary" />
            <div className="text-secondary font-secondary">
              <PrismicRichText field={slice.primary.trip_year} />
            </div>
            <ButtonGroup>
              {slice.primary.year.map((item) => (
                <Button
                  key={item.year}
                  className={`${item.year === activeYear ? "bg-primary text-white" : "bg-white text-primary"}`}
                >
                  {item.year}
                </Button>
              ))}
            </ButtonGroup>
          </section>
          <div className="text-secondary font-primary text-3xl">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="text-secondary font-secondary">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <section className="grid grid-cols-2 gap-y-5">
            <div className="text-secondary font-secondary">
              <div className="flex gap-1 font-bold mb-2">
                <DateRangeIcon />
                <PrismicRichText field={slice.primary.travel} />
              </div>
              <PrismicRichText field={slice.primary.travel_content} />
            </div>
            <div className="text-secondary font-secondary">
              <div className="flex gap-1 font-bold mb-2">
                <TravelExploreIcon />
                <PrismicRichText field={slice.primary.accomodation} />
              </div>
              <PrismicRichText field={slice.primary.accomodation_content} />
            </div>
            <div className="text-secondary font-secondary">
              <div className="flex gap-1 font-bold mb-2">
                <RestaurantIcon />
                <PrismicRichText field={slice.primary.meals} />
              </div>
              <PrismicRichText field={slice.primary.meals_content} />
            </div>
            <div className="text-secondary font-secondary">
              <div className="flex gap-1 font-bold mb-2">
                <LocationOnIcon />
                <PrismicRichText field={slice.primary.itinerary} />
              </div>
              <PrismicRichText field={slice.primary.itinerary_content} />
            </div>
          </section>
          <section className="border rounded-md p-3 flex items-center">
            <div>
              <div className="text-secondary font-primary font-bold text-xl mb-1">
                <PrismicRichText field={slice.primary.cta_title} />
              </div>
              <div className="text-secondary font-secondary text-sm">
                <PrismicRichText field={slice.primary.cta_content} />
              </div>
            </div>
            <ChevronRightIcon />
          </section>
          <div className="text-secondary font-secondary">
            <PrismicRichText field={slice.primary.trip_code} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTourSummary;

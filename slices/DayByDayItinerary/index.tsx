import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DayByDayItinerary`.
 */
export type DayByDayItineraryProps =
  SliceComponentProps<Content.DayByDayItinerarySlice>;

/**
 * Component for "DayByDayItinerary" Slices.
 */
const DayByDayItinerary = ({ slice }: DayByDayItineraryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for day_by_day_itinerary (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default DayByDayItinerary;

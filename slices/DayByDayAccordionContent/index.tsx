import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DayByDayAccordionContent`.
 */
export type DayByDayAccordionContentProps =
  SliceComponentProps<Content.DayByDayAccordionContentSlice>;

/**
 * Component for "DayByDayAccordionContent" Slices.
 */
const DayByDayAccordionContent = ({
  slice,
}: DayByDayAccordionContentProps): JSX.Element => {
  // console.log(slice.primary, "slice content");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for day_by_day_accordion_content (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default DayByDayAccordionContent;

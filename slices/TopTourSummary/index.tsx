import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TopTourSummary`.
 */
export type TopTourSummaryProps =
  SliceComponentProps<Content.TopTourSummarySlice>;

/**
 * Component for "TopTourSummary" Slices.
 */
const TopTourSummary = ({ slice }: TopTourSummaryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-2">
        <PrismicNextImage field={slice.primary.top_tour_image} />
        <div className="bg-slate-500 font-primary text-2xl">
          Discover the Best of Italy
        </div>
      </div>
    </section>
  );
};

export default TopTourSummary;

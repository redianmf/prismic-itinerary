import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TripMap`.
 */
export type TripMapProps = SliceComponentProps<Content.TripMapSlice>;

/**
 * Component for "TripMap" Slices.
 */
const TripMap = ({ slice }: TripMapProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-3"
    >
      <div className="text-center font-primary text-secondary text-3xl font-bold">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <section className="mt-3 grid grid-cols-3">
        <PrismicNextImage
          alt=""
          field={slice.primary.map}
          className="col-span-2"
        />
        <div className="flex flex-col justify-center gap-2">
          {slice.primary.legend.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <PrismicNextImage alt="" field={item.icon} className="w-5" />
              <p className="text-secondary font-secondary font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default TripMap;

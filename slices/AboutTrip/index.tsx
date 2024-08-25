"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `AboutTrip`.
 */
export type AboutTripProps = SliceComponentProps<Content.AboutTripSlice>;

/**
 * Component for "AboutTrip" Slices.
 */
const AboutTrip = ({ slice }: AboutTripProps): JSX.Element => {
  const fontColor = {
    sightseeing: "text-quartenary",
    travel: "text-quinary",
  };

  return (
    <section className="grid grid-cols-3 p-3 my-5">
      <div>
        <p
          className={`${fontColor[slice?.primary?.type]} font-primary text-2xl font-bold mb-2`}
        >
          {slice.primary.title}
        </p>
        {slice.primary.subtitle && (
          <p className="font-secondary text-secondary text-sm mb-3">
            {slice.primary.subtitle}
          </p>
        )}
        {slice.primary.additional_information && (
          <button className="px-3 py-2 bg-quinary text-white font-secondary text-lg font-bold">
            {slice.primary.additional_information}
          </button>
        )}
      </div>
      <section className="col-span-2 grid grid-cols-2 gap-2">
        {slice.primary.details.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-start font-secondary text-base"
          >
            <PrismicNextImage alt="" width={30} field={slice.primary.icon} />
            <PrismicRichText field={item.detail} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default AboutTrip;

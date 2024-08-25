"use client";
import { useEffect, useState } from "react";

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import CheckIcon from "@mui/icons-material/Check";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpIcon from "@mui/icons-material/Help";
import PrintIcon from "@mui/icons-material/Print";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

/**
 * Props for `DayByDayItinerary`.
 */
export type DayByDayItineraryProps =
  SliceComponentProps<Content.DayByDayItinerarySlice>;

interface DayByDayProps {
  slice: Content.DayByDayItinerarySlice;
  context: Array<any>;
}

/**
 * Component for "DayByDayItinerary" Slices.
 */
const DayByDayItinerary = ({ slice, context }: DayByDayProps): JSX.Element => {
  const [expand, setExpand] = useState([false]);
  const [accordionData, setAccordionData] = useState<any[]>([]);

  const isExpandedAll = expand.every((item) => item === true);

  const getAccordionData = () => {
    const data = context?.[0]?.primary.locations.map(
      (item) => item?.accordion_content?.data?.slices?.[0]?.primary
    );
    const expandState = new Array(data?.length).fill(false);

    setAccordionData(data);
    setExpand(expandState);
  };

  const toggleExpandPlace = (idx: number) => {
    const _expand = [...expand];
    _expand[idx] = !expand[idx];
    setExpand(_expand);
  };

  const toggleExpandPlaceAll = () => {
    const _expand = expand.map((item) => (item = !isExpandedAll));
    setExpand(_expand);
  };

  const getExpStatus = (status: string) => {
    switch (status) {
      case "included":
        return (
          <div className="flex gap-2 items-center font-bold">
            <CheckIcon />
            <p>Included With Trip</p>
          </div>
        );
      case "paid":
        return (
          <div className="flex justify-between items-center font-bold">
            <p>Included With Trip</p>
            <HelpIcon />
          </div>
        );

      default:
        return <div>waiting for confirmation</div>;
    }
  };

  console.log(accordionData, "accord");

  useEffect(() => {
    getAccordionData();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-2 my-10"
    >
      <div className="text-secondary font-primary font-bold text-3xl mb-1">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="text-secondary font-secondary">
        <PrismicRichText field={slice.primary.subtitle} />
      </div>
      <section className="mt-5 flex justify-between items-center">
        <div className="flex items-center gap-2 font-secondary text-primary font-bold">
          <SimCardDownloadIcon />
          <p>{slice.primary.download}</p>
          <PrintIcon />
          <p>{slice.primary.print}</p>
        </div>
        {isExpandedAll ? (
          <button
            onClick={toggleExpandPlaceAll}
            className="flex items-center font-secondary font-bold text-secondary"
          >
            <p>{slice.primary.collapse}</p>
            <ExpandLessIcon />
          </button>
        ) : (
          <button
            onClick={toggleExpandPlaceAll}
            className="flex items-center font-secondary font-bold text-secondary"
          >
            <p>{slice.primary.expand}</p>
            <ExpandMoreIcon />
          </button>
        )}
      </section>
      <section className="my-5">
        {slice.primary.locations.map((item, idx) => (
          <div key={idx} className="mb-5">
            <Accordion open={expand[idx]}>
              <AccordionHeader
                onClick={() => toggleExpandPlace(idx)}
                className={`border py-0  ${expand[idx] ? "bg-gray-100 rounded-b-none" : "bg-white rounded-lg"} transition-all duration-200`}
              >
                <section className="w-full flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <PrismicNextImage
                      field={item.image}
                      alt=""
                      className={`rounded-s-lg ${expand[idx] ? "w-0 opacity-0" : "w-[200px] opacity-100"} transition-all duration-500 ease-in-out`}
                    />
                    <div className="flex flex-col gap-2 py-3">
                      <div className="flex gap-2 font-secondary text-secondary text-sm">
                        <PrismicRichText field={item.day_number} />
                        <PrismicRichText field={item.day_remarks} />
                      </div>
                      <div className="flex gap-2 items-baseline font-primary text-secondary text-lg">
                        <PrismicRichText field={item.title} />
                        <div className="font-secondary font-normal text-sm">
                          <PrismicRichText field={item.subtitle} />
                        </div>
                      </div>
                      <div className="flex gap-2 items-center font-secondary text-secondary text-sm">
                        <PrismicNextImage
                          height={20}
                          alt=""
                          field={item.event_1}
                        />
                        <p>{item.event_1_title}</p>
                        <PrismicNextImage
                          height={20}
                          alt=""
                          field={item.event_2}
                        />
                        <p>{item.event_2_title}</p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleExpandPlaceAll}
                    className="flex items-center font-secondary font-bold text-secondary"
                  >
                    <p className="text-sm">
                      {expand[idx] ? "See Less" : "See More"}
                    </p>
                    {expand[idx] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>
                </section>
              </AccordionHeader>
              <AccordionBody className="border rounded-b-lg">
                <div className="p-5">
                  <div className="grid grid-cols-2">
                    <section>
                      <p className="text-secondary font-secondary text-lg font-semibold mb-1">
                        {accordionData?.[idx]?.day_number}
                      </p>
                      <p className="text-secondary font-primary text-2xl font-bold mb-3">
                        {accordionData?.[idx]?.title}
                      </p>
                      <p className="text-secondary font-secondary text-base font-normal mb-4">
                        {accordionData?.[idx]?.description}
                      </p>
                      <div>
                        {accordionData?.[idx]?.additional_information?.map(
                          (info, infoIdx) => (
                            <div
                              key={infoIdx}
                              className="flex gap-2 items-center mb-3"
                            >
                              <PrismicNextImage
                                width={20}
                                field={info.icon}
                                alt=""
                              />
                              <PrismicRichText field={info.description} />
                            </div>
                          )
                        )}
                      </div>
                    </section>
                    <section className="flex justify-center">
                      <PrismicNextImage
                        field={item.image}
                        alt=""
                        className="w-4/5 rounded-xl"
                      />
                    </section>
                  </div>
                  <div>
                    <p className="text-secondary font-primary text-2xl font-bold my-3">
                      {accordionData?.[idx]?.included_and_optional_exp}
                    </p>
                    <section className="grid grid-cols-3 gap-7">
                      {accordionData?.[idx]?.experience_card?.map(
                        (exp, expIdx) => (
                          <div key={expIdx} className="border rounded-xl">
                            <div className="flex flex-col h-full">
                              <PrismicNextImage
                                field={exp.exp_image}
                                alt=""
                                className="w-full rounded-t-xl"
                              />
                              <div className="p-3 grow flex flex-col justify-between">
                                <div className="mb-2">
                                  <p className="text-secondary font-primary font-bold text-lg">
                                    {exp?.title}
                                  </p>
                                  <p className="text-secondary font-secondary font-normal">
                                    {exp?.description}
                                  </p>
                                </div>
                                {getExpStatus(exp?.status)}
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </section>
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </section>
    </section>
  );
};

export default DayByDayItinerary;

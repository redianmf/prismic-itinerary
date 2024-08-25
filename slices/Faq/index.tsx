"use client";
import { useEffect, useState } from "react";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  const [expand, setExpand] = useState([false]);
  const [accordionData, setAccordionData] = useState<any[]>([]);

  const isExpandedAll = expand.every((item) => item === true);

  const toggleExpand = (idx: number) => {
    const _expand = [...expand];
    _expand[idx] = !expand[idx];
    setExpand(_expand);
  };

  const toggleExpandAll = () => {
    const _expand = expand.map((item) => (item = !isExpandedAll));
    setExpand(_expand);
  };

  const registerToggle = () => {
    const expandState = new Array(slice?.primary?.qna?.length).fill(false);
    expandState[0] = true;
    setExpand(expandState);
  };

  useEffect(() => {
    registerToggle();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-3 my-3"
    >
      <p className="text-secondary font-primary text-3xl font-bold">
        {slice.primary.title}
      </p>
      <div className="mt-3 flex justify-end">
        <button
          onClick={toggleExpandAll}
          className="flex items-center font-secondary font-bold text-secondary"
        >
          {isExpandedAll ? (
            <>
              <p>{slice.primary.collapse}</p>
              <ExpandLessIcon />
            </>
          ) : (
            <>
              <p>{slice.primary.expand}</p>
              <ExpandMoreIcon />
            </>
          )}
        </button>
      </div>
      <section className="mt-5">
        {slice.primary.qna.map((item, idx) => (
          <div key={idx} className="mb-3">
            <Accordion open={expand[idx]}>
              <AccordionHeader
                onClick={() => toggleExpand(idx)}
                className={`border px-3 py-5  ${expand[idx] ? "bg-primary border border-primary" : "bg-white"} transition-all duration-200`}
              >
                <div className="w-full flex justify-between items-center">
                  <p
                    className={`font-secondary text-xl ${expand[idx] ? "text-white" : "text-secondary"}`}
                  >
                    {item.question}
                  </p>
                  <div className="text-gray-500">
                    {expand[idx] ? <RemoveCircleIcon /> : <AddCircleIcon />}
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="border border-primary border-t-0">
                <div className="py-3 px-5 text-secondary font-secondary text-lg font-normal">
                  <PrismicRichText field={item.answer} />
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Faq;

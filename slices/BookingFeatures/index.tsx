import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import WalletIcon from "@mui/icons-material/Wallet";

/**
 * Props for `BookingFeatures`.
 */
export type BookingFeaturesProps =
  SliceComponentProps<Content.BookingFeaturesSlice>;

/**
 * Component for "BookingFeatures" Slices.
 */
const BookingFeatures = ({ slice }: BookingFeaturesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-5 mb-5">
        <section className="grid grid-cols-3">
          <div className="flex justify-center items-center text-secondary font-secondary gap-1">
            <div className="bg-slate-300 p-3 rounded-full">
              <WalletIcon />
            </div>
            <PrismicRichText field={slice.primary.feature_1} />
          </div>
          <div className="flex justify-center items-center text-secondary font-secondary gap-1">
            <div className="bg-slate-300 p-3 rounded-full">
              <CreditCardIcon />
            </div>
            <PrismicRichText field={slice.primary.feature_2} />
          </div>
          <div className="flex justify-center items-center text-secondary font-secondary gap-1">
            <div className="bg-slate-300 p-3 rounded-full">
              <EditCalendarIcon />
            </div>
            <PrismicRichText field={slice.primary.feature_3} />
          </div>
        </section>
        <div className="mx-2 mt-3 p-5 bg-tertiary rounded-lg text-center text-white font-secondary">
          <PrismicRichText field={slice.primary.additional_information} />
        </div>
      </div>
    </section>
  );
};

export default BookingFeatures;

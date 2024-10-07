import { GoCheckCircle } from "react-icons/go";

const PricingSection = () => {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-extrabold mb-8 text-center">
        Select Your Event Plan
      </h3>
      <div className="flex justify-center space-x-52">
        <div className="p-6 w-72">
          <h4 className="text-xl font-semibold mb-4">Basic</h4>
          <p className="text-2xl font-extrabold">FREE</p>
          <ul className="mt-4 text-lg flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              Access up to 10 events
            </li>
            <li className="flex items-center gap-2 w-[253px]">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              Limited monthly downloads
            </li>
            <li className="flex items-center gap-2">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              7-day trial period
            </li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-white rounded-lg w-full">
            Start Exploring for Free
          </button>
        </div>
        <div className="p-6 w-72">
          <h4 className="text-xl font-semibold mb-4">Pro</h4>
          <p className="text-2xl font-extrabold">QAR 60</p>
          <ul className="mt-4 text-lg flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              Unlimited event access
            </li>
            <li className="flex items-center gap-2 w-[268px]">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              Unlimited downloads & perks
            </li>
            <li className="flex items-center gap-2">
              <GoCheckCircle className="bg-white rounded-full size-6" />
              7-day free trial
            </li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-white w-full rounded-lg">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

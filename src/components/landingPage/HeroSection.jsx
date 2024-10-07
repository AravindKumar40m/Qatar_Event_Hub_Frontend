import { image1 } from "../../assets/index";

const HeroSection = () => {
  return (
    <section className="text-cente">
      <div className="flex gap-4">
        <div className="p-16 flex flex-col w-full">
          <h2 className="text-5xl font-extrabold mb-4 text-[#2b2c2b] text-nowrap">
            Discover & Attend
          </h2>
          <h2 className="text-5xl font-extrabold mb-4 text-[#2b2c2b] text-nowrap">
            Exciting Events in Qatar!
          </h2>
          <p className="mt-20 text-xl text-[#4d4e4d]">
            Claim Your Free Ticket Now
          </p>
          <button className="px-20 py-3 mt-10 bg-black text-white text-lg rounded-lg font-semibold w-1/2">
            Attend Event
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <img
            src={image1}
            alt="Event illustration"
            className="flex w-1/2 h-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

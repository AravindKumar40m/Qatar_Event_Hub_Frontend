const Footer = () => {
  return (
    <footer className="py-8 flex justify-between">
      <div className="flex flex-col gap-5 justify-between font-normal">
        <div>
          <p className="text-2xl font-semibold">Qatar Event Hub</p>
          <p>Your ultimate event experience since 2022!</p>
        </div>
        <p>Qatar Event Hub</p>
      </div>
      <div className="flex flex-col text-right mt-4 font-normal">
        <a href="#" className="mx-4 font-semibold">
          Help center
        </a>
        <a href="#" className="mx-4">
          FAQs
        </a>
        <a href="#" className="mx-4">
          Contact Us
        </a>
        <a href="#" className="mx-4">
          How it works
        </a>
        <a href="#" className="mx-4">
          Terms and conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import { image1 } from "../../assets/index";

const FeaturedEvents = () => {
  const events = [
    {
      title: "Engage with Fellow",
      image: image1,
      phase: "Connect with like-minded",
    },
    {
      title: "Interactive Event",
      image: image1,
      phase: "Engaging Event Platform",
    },
    {
      title: "Enjoy Laughter and ",
      image: image1,
      phase: "Comedy Shows and",
    },
    {
      title: "Embrace Diverse",
      image: image1,
      phase: "Explore Various Event",
    },
    {
      title: "Seize the Moment!",
      image: image1,
      phase: "Embrace Every Event",
    },
  ];

  return (
    <section className="py-12 px-16">
      <h3 className="text-xl font-extrabold mb-8">Explore Featured Events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg flex w-full h-full"
            />
            <p className="mt-4 font-bold text-xl">{event.title}</p>
            <p className="mt-2 font-semibold text-[#808080]">{event.phase}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;

import Image from "next/image";

const MethodologySection = () => {
  const cards = [
    {
      number: "01",
      title: "Team Augmentation",
      description:
        "Deploy a dedicated tech team that integrates seamlessly with your business. They'll tackle your project needs with precision.",
      bg: "bg-pink-100",
      numberColor: "text-purple-800",
      div: (
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-black rounded-tl-3xl rounded-br-3xl"></div>
          <div className="w-6 h-6 bg-black rounded-tr-3xl rounded-bl-3xl"></div>
        </div>
      ),
    },
    {
      number: "02",
      title: "MVP Services",
      description:
        "We help you launch your Minimum Viable Product (MVP) faster to validate your idea in real-time market conditions.",
      bg: "bg-green-100",
      numberColor: "text-green-700",
      div: (
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-black rounded-tr-full rounded-bl-4xl"></div>
          <div className="w-6 h-6 bg-black rounded-tl-full rounded-br-4xl"></div>
        </div>
      ),
    },
    {
      number: "03",
      title: "End to End Development",
      description:
        "From ideation to deployment, we handle the full development lifecycle with agile practices and robust architecture.",
      bg: "bg-blue-100",
      numberColor: "text-blue-700",
      div: (
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-black rounded-tl-5xl rounded-br-2xl"></div>
          <div className="w-6 h-6 bg-black rounded-tl-5xl rounded-br-3xl"></div>
        </div>
      ),
    },
    {
      number: "04",
      title: "Offshore Office Expansion",
      description:
        "Scale your business with offshore teams. We set up and manage your remote offices with technical excellence.",
      bg: "bg-purple-200",
      numberColor: "text-purple-700",
      div: (
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <div className="w-6 h-6 bg-black rounded-tr-4xl rounded-br-2xl"></div>
        </div>
      ),
    },
  ];

  return (
    <>
      <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl pb-12">
        <span className="font-title"> Our Methodology to</span> <br />
        <span className="font-uncut font-medium tracking-tighter">
          Collaboration
        </span>
      </h1>
      <section className="relative overflow-hidden py-20 px-5 md:px-20 bg-[#0c0a1c] text-white">
        {/* Background */}
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/images/vectors/cta-section.svg"
          alt="cta section"
          width={1200}
          height={800}
        />

        <div className="relative z-10 max-w-5xl items-center w-full  mx-auto">
          {/* Header */}
          <p className="font-title italic tracking-tighter text-center py-2  text-xl lg:text-xl font-extralight">
            We follow an agile development methodology and guarantee the timely
            delivery of high-quality software products.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.bg} relative group rounded-xl h-80 overflow-hidden transition-all duration-500 hover:shadow-xl`}
              >
                {/* Top section */}
                <div className="flex justify-between items-start">
                  <div className="p-3">{card.div}</div>
                  <h1
                    className={`text-8xl font-uncut font-bold ${card.numberColor}`}
                  >
                    {card.number}
                  </h1>
                </div>

                {/* Title */}
                <h1 className="pl-3 text-3xl font-uncut text-black mt-8 group-hover:opacity-0 transition-opacity duration-300">
                  {card.title}
                </h1>

                {/* Description (hidden until hover) */}
                <div className="absolute top-20 left-0 w-full h-full p-6  text-black opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-xl">
                  <h1 className="text-2xl font-bold mb-3 font-title italic">
                    {card.title}
                  </h1>
                  <p className="text-sm text-gray-700 font-uncut">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MethodologySection;

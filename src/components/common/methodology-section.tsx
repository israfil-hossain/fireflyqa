import Image from "next/image";

const MethodologySection = () => {
  const cards = [
    {
      number: "01",
      title: "Manpower Solutions",
      description:
        "We provide both skilled and unskilled manpower tailored for construction, hospitality, and technical services. Reliable, experienced, and ready to deliver.",
      backgroundImage: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      number: "02",
      title: "MEP Services",
      description:
        "End-to-end Mechanical, Electrical, and Plumbing services. From design and installation to regular maintenance, we ensure optimal system performance.",
      backgroundImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual path
    },
    {
      number: "03",
      title: "HVAC & Building Automation",
      description:
        "Smart HVAC solutions with integrated BAS for efficient climate control and energy management across commercial and industrial buildings.",
      backgroundImage: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual path
    },
  ];

  return (
    <>
      <h1 className="max-w-2xl mx-auto text-center font-medium text-4xl md:text-5xl lg:text-6xl pb-12">
        <span className="font-title"> Our Core</span> <br />
        <span className="font-uncut font-medium tracking-tighter">
          Technical Service Areas
        </span>
      </h1>

      <section className="relative overflow-hidden py-20 px-5 md:px-20 bg-[#752362] text-white">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/images/vectors/cta-section.svg"
          alt="cta section"
          width={1200}
          height={800}
        />

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <p className="font-title italic tracking-tighter text-center py-2 text-xl font-extralight">
            We specialize in delivering top-tier manpower, MEP, and smart building automation services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-96 rounded-xl overflow-hidden shadow-lg group"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h1 className="text-4xl font-bold text-white font-title mb-3">
                    {card.title}
                  </h1>
                  <p className="text-white text-sm leading-relaxed font-uncut">
                    {card.description}
                  </p>
                  <span className="absolute top-4 right-4 text-6xl font-black text-white opacity-20">
                    {card.number}
                  </span>
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

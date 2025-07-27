import React from "react";

const Cards = () => {
  const cards = [
    {
      category: "Design",
      title: "Your company might be in need of a social media audit.",
      color: "text-green-500",
    },
    {
      category: "Development",
      title: "How can businesses utilize email marketing to nurture.",
      color: "text-purple-500",
    },
    {
      category: "Photography",
      title: "Auto-reply: How to use automated responses.",
      color: "text-yellow-500",
    },
    {
      category: "Photography",
      title: "How to set up lighting for product photos.",
      color: "text-yellow-500",
    },
    {
      category: "Photography",
      title: "Capture the perfect flat lay with these 5 tips.",
      color: "text-yellow-500",
    },
    {
      category: "Photography",
      title: "Using natural light effectively for portraits.",
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* 🔵 Top Banner */}
      <div className="bg-[#f9f9fb] relative py-16 text-center">
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right overflow-hidden" />

        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-400 opacity-30" />

        <h1 className="text-4xl font-bold text-gray-800 z-10 relative">
          Our Latest Insights
        </h1>
        <p className="text-sm text-gray-500 mt-2 z-10 relative font-medium">
          Explore trending topics and expert knowledge in design, dev, and more.
        </p>
      </div>

      {/* 🔵 Cards Grid Section */}
      <div className="bg-blue-200/25 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              {/* 🔺 Background triangle */}
              <div className="absolute bottom-[-60px] right-0 w-[180px] h-[180px] bg-gray-500 opacity-10 rotate-45 origin-bottom-right z-0" />

              {/* Card content */}
              <img
                src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                alt="Card"
                className="w-full h-48 object-cover z-10 relative"
              />
              <div className="p-4 z-10 relative">
                <p className={`${card.color} font-semibold text-sm`}>
                  {card.category}
                </p>
                <h2 className="font-bold text-lg text-gray-800 mt-1">
                  {card.title}
                </h2>
                <div className="mt-4 group">
  <a
    href="#"
    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:shadow-md"
  >
    <span className="relative z-10 group-hover:underline">More Details</span>
    <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-lg">
      →
    </span>
  </a>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

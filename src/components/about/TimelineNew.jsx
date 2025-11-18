import React, { useState } from "react";
import {
  Calendar,
  Sprout,
  Users,
  Award,
  TrendingUp,
  ChevronRight,
  Leaf,
  Wheat,
  CheckCircle,
} from "lucide-react";

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState("2022-2023");

  const yearlyData = {
    "2020-2021": [
      {
        title: "Foundation Year",
        description:
          "ESTABLISHED CORE REGULATORY FRAMEWORK AND LICENSING SYSTEM.",
        achievements: [
          "50+ licenses issued",
          "Policy framework developed",
          "Infrastructure setup",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "Capacity Building",
        description: "LAUNCHED FIRST TRAINING PROGRAMS FOR SEED OPERATORS.",
        achievements: [
          "200+ operators trained",
          "5 regional workshops",
          "Quality standards set",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
    ],
    "2021-2022": [
      {
        title: "Expansion Phase",
        description:
          "EXPANDED SEED CERTIFICATION TO ALL DISTRICTS OF SIERRA LEONE.",
        achievements: [
          "70+ new licenses",
          "National coverage achieved",
          "Lab facilities upgraded",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "Quality Assurance",
        description:
          "IMPLEMENTED COMPREHENSIVE SEED TESTING AND QUALITY CONTROL MEASURES.",
        achievements: [
          "1000+ inspections",
          "New testing protocols",
          "ECOWAS alignment started",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
    ],
    "2022-2023": [
      {
        title: "Government Initiative",
        description: "NO GOV. IMPORTATION OF RICE SEED IN 2023.",
        achievements: [
          "100% local seed production",
          "Self-sufficiency achieved",
          "Import reduction",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "Strategic Partnerships",
        description: "IDENTIFIED TEN ADDITIONAL KEY SEED PRODUCERS.",
        achievements: [
          "10 new producers",
          "Production capacity up 40%",
          "Quality partnerships",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "National Collaboration",
        description: "COLLABORATE WITH SEED ACTORS ACROSS THE COUNTRY.",
        achievements: [
          "120+ active partners",
          "15 districts covered",
          "Unified standards",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "Variety Release",
        description:
          "RELEASED NEW VARIETIES (RELEASED 19 VARIETIES OF RICE, GROUNDNUT & SOYA BEANS).",
        achievements: [
          "19 new varieties",
          "Higher yields",
          "Climate-resistant seeds",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "Training Excellence",
        description: "TRAINED AROUND 400 SEED ACTORS ACROSS THE COUNTRY.",
        achievements: [
          "400+ trained",
          "95% certification rate",
          "Skills development",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
    ],
    "2023-2024": [
      {
        title: "Digital Transformation",
        description:
          "LAUNCHED DIGITAL SEED CERTIFICATION PLATFORM AND TRACKING SYSTEM.",
        achievements: [
          "Digital platform live",
          "Real-time tracking",
          "Paperless processing",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
      {
        title: "International Recognition",
        description:
          "ACHIEVED FULL ECOWAS COMPLIANCE AND INTERNATIONAL CERTIFICATION.",
        achievements: [
          "ECOWAS certified",
          "ISO standards met",
          "Global recognition",
        ],
        images: ["/banner-images/img-6.jpeg", "/banner-images/img-7.jpeg"],
      },
    ],
  };

  const years = Object.keys(yearlyData);
  const currentData = yearlyData[activeYear];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {[...Array(10)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-green-200 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${25 + Math.random() * 35}px`,
              height: `${25 + Math.random() * 35}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-white/80 backdrop-blur-sm border-2 border-green-300 rounded-full shadow-lg">
            <Calendar className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent tracking-wide">
              OUR JOURNEY
            </span>
            <Wheat className="w-5 h-5 text-emerald-600 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Key Achievements Timeline
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            <Sprout className="w-7 h-7 text-green-600 animate-bounce" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our{" "}
            <span className="font-bold text-green-700">
              transformative milestones
            </span>{" "}
            and the impact we've made on Sierra Leone's agricultural landscape.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-green-200">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-500 ${
                  activeYear === year
                    ? "text-white"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {activeYear === year && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-xl shadow-lg"></div>
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{year}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-teal-500 rounded-full transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      {index === 0 && <Sprout className="w-7 h-7 text-white" />}
                      {index === 1 && <Users className="w-7 h-7 text-white" />}
                      {index === 2 && <Award className="w-7 h-7 text-white" />}
                      {index === 3 && (
                        <TrendingUp className="w-7 h-7 text-white" />
                      )}
                      {index === 4 && (
                        <CheckCircle className="w-7 h-7 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-4rem)] ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>

                    {/* Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-green-200 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                      {/* Top Gradient Bar */}
                      <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

                      <div className="p-8">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center space-x-2">
                          <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                            {item.title}
                          </span>
                          <ChevronRight className="w-5 h-5 text-green-600 transform group-hover:translate-x-1 transition-transform" />
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-700 font-semibold mb-6">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2 mb-6">
                          {item.achievements.map((achievement, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-4">
                          {item.images.map((img, i) => (
                            <div
                              key={i}
                              className="relative group/img overflow-hidden rounded-xl"
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                              <img
                                src={img}
                                alt={`${item.title} - Image ${i + 1}`}
                                className="w-full h-32 md:h-40 lg:h-48 object-cover transform transition-transform duration-500 group-hover/img:scale-110"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-full shadow-2xl px-8 py-4 transform transition-all hover:scale-105 cursor-pointer">
            <Sprout className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">
              More Achievements Coming Soon
            </span>
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;

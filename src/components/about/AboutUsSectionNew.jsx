import React, { useState } from "react";
import {
  Leaf,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      id: 1,
      icon: Users,
      number: "120+",
      title: "Licensed Operators",
      description:
        "Ensuring certified and regulated seed operators across Sierra Leone.",
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      id: 2,
      icon: Leaf,
      number: "45+",
      title: "Certified Seed Varieties",
      description:
        "Promoting high-quality seeds that meet national and international standards.",
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      icon: TrendingUp,
      number: "5,000+",
      title: "Farmers Trained",
      description:
        "Empowering farmers with the knowledge and skills to boost productivity.",
      gradient: "from-lime-500 to-green-600",
      iconBg: "bg-lime-100",
      iconColor: "text-lime-600",
    },
  ];

  const features = [
    { icon: CheckCircle, text: "ECOWAS Certified Standards" },
    { icon: Globe, text: "International Quality Benchmarks" },
    { icon: Award, text: "Comprehensive Training Programs" },
  ];

  return (
    <section className="relative py-20 w-full overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 max-w-[90rem] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full">
              Established Under 2018 Seed Act
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content: Text Section */}
          <div className="space-y-6">
            <div className="group">
              <p className="text-lg text-gray-700 leading-relaxed">
                The{" "}
                <span className="font-semibold text-emerald-700">
                  Sierra Leone Seed Certification Agency (SLeSCA)
                </span>{" "}
                was established under the 2018 Seed Act to regulate seed quality
                and support the development of a sustainable seed industry. Our
                mission is to ensure seed sufficiency, promote agricultural
                innovation, and contribute to Sierra Leone's food security and
                economic growth.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>

            <div className="group">
              <p className="text-lg text-gray-700 leading-relaxed">
                As the authority for seed regulation, SLeSCA licenses seed
                operators, enforces compliance with national standards, and
                certifies seeds to meet ECOWAS and global benchmarks. Through
                training programs, inspections, and partnerships, we empower
                farmers and stakeholders to thrive in a resilient agricultural
                ecosystem.
              </p>
            </div>

            {/* Features List */}
            <div className="pt-6 space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-emerald-700 transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Image Section */}
          <div className="relative">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

              {/* Image Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform transition-transform group-hover:scale-105">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="banner-images/img-6.jpeg"
                    alt="SLeSCA Agricultural Innovation"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 transform transition-transform hover:scale-110">
                <div className="text-center">
                  <Leaf className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-800">2018</p>
                  <p className="text-xs text-gray-600">Est. Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              onMouseEnter={() => setHoveredCard(stat.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
              ></div>

              {/* Card Content */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`${
                    stat.iconBg
                  } w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform ${
                    hoveredCard === stat.id ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>

                {/* Number */}
                <h4
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                >
                  {stat.number}
                </h4>

                {/* Title */}
                <h5 className="text-xl font-semibold text-gray-800 mb-3">
                  {stat.title}
                </h5>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-20 text-center">
          <Link
            to={"#statistics-impact"}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer group"
          >
            <span className="font-semibold">Learn More About Our Impact</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUsSection;

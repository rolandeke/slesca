import React, { useState } from "react";
import {
  Sprout,
  Building2,
  Handshake,
  Globe2,
  Shield,
  Award,
  CheckCircle2,
} from "lucide-react";

const AuthorityOfSLeSCA = () => {
  const [activeCard, setActiveCard] = useState(null);

  const authorityCards = [
    {
      id: 1,
      icon: Sprout,
      title: "Implementing Partner",
      description:
        "Trusted partner of the National Seed Board, ensuring seamless coordination in governance.",
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      iconBg: "bg-emerald-500",
      glowColor: "emerald",
      stats: "100% Coordination",
    },
    {
      id: 2,
      icon: Building2,
      title: "Semi-Autonomous",
      description:
        "Approved by Cabinet and ratified by Parliament to operate independently with oversight.",
      gradient: "from-teal-500 via-cyan-500 to-blue-600",
      bgGradient: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-500",
      glowColor: "teal",
      stats: "Parliament Ratified",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Governance Alignment",
      description:
        "Aligned with the National Seed Secretariat for robust governance and operations.",
      gradient: "from-green-500 via-lime-500 to-emerald-600",
      bgGradient: "from-green-50 to-lime-50",
      iconBg: "bg-green-500",
      glowColor: "green",
      stats: "Strategic Alignment",
    },
    {
      id: 4,
      icon: Globe2,
      title: "Global Standards",
      description:
        "Engages in diverse sector partnerships while adhering to international standards.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      bgGradient: "from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-500",
      glowColor: "cyan",
      stats: "ECOWAS Certified",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 w-full">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#10b981" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-green-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem] relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2 mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full shadow-lg">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Regulatory Excellence</span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl  font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 bg-clip-text text-transparent">
              Authority of the Agency
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-emerald-500 rounded-full"></div>
            <Award className="w-6 h-6 text-emerald-600" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            As the leading authority for seed quality regulation, SLeSCA is
            entrusted with a pivotal role in
            <span className="font-semibold text-emerald-700">
              {" "}
              Sierra Leone's agricultural sector
            </span>
            . Here's how we operate.
          </p>
        </div>

        {/* Authority Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {authorityCards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
              ></div>

              {/* Card Container */}
              <div
                className={`relative h-full bg-gradient-to-br ${card.bgGradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden`}
              >
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${card.gradient}`}></div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
                    ></div>
                    <div
                      className={`relative ${
                        card.iconBg
                      } w-10 h-10 rounded-2xl flex items-center justify-center transform transition-all duration-500 ${
                        activeCard === card.id ? "rotate-12 scale-110" : ""
                      } shadow-xl`}
                    >
                      <card.icon
                        className="w-5 h-5 text-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                    <CheckCircle2
                      className={`w-4 h-4 text-emerald-600 ${
                        activeCard === card.id ? "animate-pulse" : ""
                      }`}
                    />
                    <span className="text-xs font-semibold text-emerald-700">
                      {card.stats}
                    </span>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>

                {/* Hover Overlay Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 bg-white rounded-2xl shadow-xl p-8 max-w-4xl">
            {/* Stat 1 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">2018</p>
                <p className="text-xs text-gray-600">Seed Act Est.</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">100%</p>
                <p className="text-xs text-gray-600">Compliance</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">ECOWAS</p>
                <p className="text-xs text-gray-600">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityOfSLeSCA;

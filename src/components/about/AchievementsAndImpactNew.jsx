import React, { useState, useEffect } from "react";
import {
  Sprout,
  Users,
  Award,
  ClipboardCheck,
  Leaf,
  Wheat,
  TreePine,
  Sun,
} from "lucide-react";

const AchievementsAndImpact = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      title: "Licensed Seed Operators",
      count: 120,
      description: "Licensed 120+ seed operators across Sierra Leone.",
      icon: Award,
      gradient: "from-green-400 via-emerald-500 to-green-600",
      bgGradient: "from-green-50/80 to-emerald-50/80",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      glowColor: "shadow-green-500/50",
      accentColor: "text-green-600",
    },
    {
      title: "Farmers Trained",
      count: 5000,
      description:
        "Trained over 5,000 farmers in seed management and sustainable farming practices.",
      icon: Users,
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      bgGradient: "from-emerald-50/80 to-teal-50/80",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      glowColor: "shadow-emerald-500/50",
      accentColor: "text-emerald-600",
    },
    {
      title: "Certified Seed Varieties",
      count: 45,
      description:
        "Certified 45 new seed varieties to meet national and international standards.",
      icon: Sprout,
      gradient: "from-lime-400 via-green-500 to-emerald-600",
      bgGradient: "from-lime-50/80 to-green-50/80",
      iconBg: "bg-gradient-to-br from-lime-500 to-green-600",
      glowColor: "shadow-lime-500/50",
      accentColor: "text-lime-600",
    },
    {
      title: "Inspections Conducted",
      count: 2000,
      description:
        "Conducted over 2,000 inspections to ensure seed quality and compliance.",
      icon: ClipboardCheck,
      gradient: "from-teal-400 via-emerald-500 to-green-600",
      bgGradient: "from-teal-50/80 to-emerald-50/80",
      iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600",
      glowColor: "shadow-teal-500/50",
      accentColor: "text-teal-600",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;

    achievements.forEach((achievement, index) => {
      let step = 0;
      const increment = achievement.count / steps;

      const timer = setInterval(() => {
        step++;
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(
            Math.floor(increment * step),
            achievement.count
          );
          return newCounters;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Green Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-lime-200 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Floating Leaves */}
        {[...Array(15)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-green-300 opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Agricultural Badge */}
          <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-white/80 backdrop-blur-sm border-2 border-green-300 rounded-full shadow-lg">
            <Wheat className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent tracking-wide">
              GROWING EXCELLENCE
            </span>
            <TreePine className="w-5 h-5 text-emerald-600 animate-pulse" />
          </div>

          {/* Main Title with Green Gradient */}
          <h2 className="text-4xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h2>

          {/* Decorative Organic Line */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            <Sprout className="w-7 h-7 text-green-600 animate-bounce" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg  text-gray-700 max-w-3xl mx-auto leading-relaxed">
            SLeSCA's accomplishments reflect our{" "}
            <span className="font-bold text-green-700">
              unwavering commitment
            </span>{" "}
            to advancing agriculture and fostering sustainable growth in Sierra
            Leone.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Enhanced Glow Effect */}
              <div
                className={`absolute -inset-1.5 bg-gradient-to-r ${achievement.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-700 ${achievement.glowColor}`}
              ></div>

              {/* Card Container with Backdrop */}
              <div
                className={`relative h-full bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl border border-white/50`}
              >
                {/* Top Gradient Bar with Wave Effect */}
                <div
                  className={`h-2.5 bg-gradient-to-r ${achievement.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/40 animate-pulse"></div>
                  <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                </div>

                {/* Organic Leaf Pattern Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Leaf className="w-full h-full text-green-600 transform rotate-45" />
                </div>

                <div className="p-8 relative">
                  {/* Icon Container with Agricultural Theme */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative ${achievement.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-2xl ${achievement.glowColor} border-2 border-white/30`}
                    >
                      <achievement.icon
                        className="w-10 h-10 text-white"
                        strokeWidth={2.5}
                      />
                      {hoveredCard === index && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full border-2 border-white/50 rounded-2xl animate-ping"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Counter with Organic Animation */}
                  <div className="text-center mb-4">
                    <div className="relative inline-block">
                      <h3
                        className={`text-6xl lg:text-7xl font-black bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent filter drop-shadow-lg`}
                      >
                        {counters[index].toLocaleString()}
                        <span className="text-5xl">+</span>
                      </h3>
                      {/* Animated Underline */}
                      <div
                        className={`h-1.5 bg-gradient-to-r ${achievement.gradient} mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                      ></div>
                      {/* Pulsing Dots */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {[0, 1, 2].map((dot) => (
                          <div
                            key={dot}
                            className={`w-1.5 h-1.5 ${achievement.accentColor.replace(
                              "text",
                              "bg"
                            )} rounded-full animate-pulse`}
                            style={{ animationDelay: `${dot * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title with Hover Effect */}
                  <p
                    className={`text-xl font-bold text-gray-800 mb-4 text-center group-hover:${achievement.accentColor} transition-colors duration-500`}
                  >
                    {achievement.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 text-center leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Growth Indicator */}
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className={`w-2 h-2 ${achievement.accentColor.replace(
                        "text",
                        "bg"
                      )} rounded-full animate-pulse`}
                    ></div>
                    <span
                      className={`text-xs font-semibold ${achievement.accentColor}`}
                    >
                      Growing Impact
                    </span>
                    <Sun
                      className={`w-4 h-4 ${achievement.accentColor} animate-spin`}
                      style={{ animationDuration: "8s" }}
                    />
                  </div>
                </div>

                {/* Bottom Growth Bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${achievement.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                >
                  <div className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Image Section with Agricultural Theme */}
        <div className="relative group">
          {/* Organic Glow Effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent z-10"></div>

            {/* Side Decorative Elements */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <div className="bg-white/20 backdrop-blur-md rounded-r-2xl p-4 shadow-xl">
                <Wheat className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <div className="bg-white/20 backdrop-blur-md rounded-l-2xl p-4 shadow-xl">
                <Leaf className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>

            <img
              src="/banner-images/img-5.jpeg"
              alt="SLeSCA Agricultural Impact"
              className="w-full h-64 md:h-80 lg:h-96 object-cover object-top transform transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
              <div className="transform transition-all duration-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-4">
                  <Sprout className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-semibold">
                    2024 Impact Highlights
                  </span>
                </div>
                <h3 className="text-4xl font-black text-white mb-3 drop-shadow-lg">
                  Cultivating Sustainable Growth
                </h3>
                <p className="text-gray-100 text-base max-w-2xl leading-relaxed drop-shadow-md">
                  Witnessing the transformative impact of quality seeds and
                  sustainable farming practices across Sierra Leone's
                  agricultural landscape. Together, we're growing a resilient
                  future.
                </p>
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <TreePine className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">
                      Sustainable
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-emerald-500/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">
                      Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Corner Badge */}
            <div className="absolute top-6 right-6 z-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl px-5 py-3 shadow-2xl transform transition-transform group-hover:scale-110">
              <div className="flex items-center space-x-2">
                <Sun
                  className="w-5 h-5 text-white animate-spin"
                  style={{ animationDuration: "10s" }}
                />
                <div>
                  <p className="text-xs font-bold text-white">Growing Since</p>
                  <p className="text-lg font-black text-white">2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default AchievementsAndImpact;

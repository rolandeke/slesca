import React, { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Sparkles,
  TrendingUp,
  Users,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample images - replace with your actual images
const images = [
  "/banner-images/img-2.jpeg",
  // "/banner-images/img-3.jpeg",
  // "/banner-images/img-5.jpeg",
  "/banner-images/img-6.jpeg",
  "/banner-images/img-7.jpeg",
];

const missionPoints = [
  {
    icon: Target,
    text: "Ensure seed sufficiency",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: TrendingUp,
    text: "Drive agricultural growth",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    text: "Empower farmers & stakeholders",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Leaf,
    text: "Build sustainable ecosystems",
    color: "from-orange-400 to-amber-500",
  },
];

const visionHighlights = [
  { number: "100%", label: "Local Production", icon: Leaf },
  { number: "5000+", label: "Farmers Empowered", icon: Users },
  { number: "98%", label: "Quality Assurance", icon: Target },
];

const MissionVision = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const getItemsPerView = () => {
    if (typeof window === "undefined") return itemsPerView.desktop;
    if (window.innerWidth < 640) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  };

  const [visibleItems, setVisibleItems] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getItemsPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying, visibleItems]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
              Mission & Vision
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Transforming Agriculture, Ensuring Food Security
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mission Text */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                    OUR{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-orange-500 to-green-700">
                      MISSION
                    </span>
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our mission is to build a strong and sustainable seed sector
                  in Sierra Leone. By ensuring seed sufficiency, we aim to
                  contribute to food security and agricultural growth. SLeSCA is
                  dedicated to empowering farmers and stakeholders with the
                  resources, training, and regulatory support they need to
                  thrive in a resilient and self-sufficient agricultural
                  ecosystem.
                </p>

                {/* Mission Points */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {missionPoints.map((point, index) => (
                    <div
                      key={index}
                      className="group flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${
                          point.color
                        } transform transition-transform duration-300 ${
                          hoveredCard === index ? "scale-110" : ""
                        }`}
                      >
                        <point.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Images Carousel */}
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Carousel Container */}
                <div className="relative h-80 md:h-96">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        index === currentIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Mission ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? "w-8 h-2 bg-white"
                          : "w-2 h-2 bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Vision Highlights */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {visionHighlights.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-700 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Vision Card */}
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 shadow-2xl overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                      A Sustainable Future
                    </h3>
                  </div>

                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Building a resilient agricultural sector that drives
                    economic growth, strengthens communities, and fosters a
                    self-sufficient nation.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Innovation",
                      "Sustainability",
                      "Growth",
                      "Empowerment",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Vision Text */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                    OUR{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-orange-500 to-green-700">
                      VISION
                    </span>
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our vision is to create a sustainable seed system in Sierra
                  Leone, reducing dependency on imported seeds and making the
                  seed sector attractive for private investment. We aim to
                  empower local farmers, promote agricultural innovation, and
                  ensure food security for all Sierra Leoneans.
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  This vision goes beyond just seeds—it's about building a
                  resilient agricultural sector that drives economic growth,
                  strengthens communities, and fosters a self-sufficient nation.
                  Together, we can transform Sierra Leone into a leader in
                  sustainable agriculture and food production.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Join Our Mission
                </h4>
                <p className="text-gray-600 mb-4">
                  Be part of the transformation. Together, we're building a
                  sustainable future for Sierra Leone's agriculture.
                </p>
                <Link
                  to={"/about"}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

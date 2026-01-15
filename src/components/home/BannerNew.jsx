import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  ChevronRight,
  Leaf,
  Award,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { apiClient } from "../../lib/api";

// Sample images - replace with your actual images
const bannerImages = [
  "/banner-images/img-2.jpeg",
  "/banner-images/img-3.jpeg",
  "/banner-images/img-5.jpeg",
  "/banner-images/img-6.jpeg",
  "/banner-images/img-7.jpeg",
];

const stats = [
  {
    icon: Award,
    label: "Certified Seeds",
    value: "10,000+",
    color: "text-blue-400",
  },
  {
    icon: Users,
    label: "Farmers Trained",
    value: "5,000+",
    color: "text-green-400",
  },
  {
    icon: Target,
    label: "Success Rate",
    value: "98%",
    color: "text-yellow-400",
  },
];

const highlights = [
  {
    icon: Leaf,
    text: "Quality Assurance",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Award,
    text: "Certified Standards",
    color: "from-blue-400 to-cyan-500",
  },
  { icon: Users, text: "Expert Support", color: "from-purple-400 to-pink-500" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [statsData, setStatsData] = useState([]);
  const [highlightsData, setHighlightsData] = useState([]);

  // Auto-play carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Track mouse position for parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // useMemo(async () => {
  //   const response = await apiClient.get("/home_page?select=*");
  //   const filteredData = response.data[0].stats.filter(
  //     (item) =>
  //       item.sectionTag === "home_banner" ||
  //       item.sectionTag === "home_banner_highlights"
  //   );
  //   // console.log(filteredData);
  // }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-green-950 overflow-hidden pt-16 lg:pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content - Text Section */}
          <div className="space-y-8" onMouseMove={handleMouseMove}>
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-3xl lg:text-3xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-blue-200 animate-gradient">
                  Welcome to {" "}
                </span>
                {/* <br /> */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400">
                  Sierra Leone {" "}
                </span>
                {/* <br /> */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400">
                  Seed Certification {" "}
                </span>
                {/* <br /> */}
                <span className="text-white text-3xl md:text-3xl">Agency {" "}</span>
                <span className="text-green-400 text-3xl md:text-3xl">
                  {" "}
                  (SLeSCA)
                </span>
              </h1>
            </div>
            {/* Badge */}
            <div
              className="inline-flex items-center space-x-2 bg-green-800/50 backdrop-blur-sm border border-green-600/30 rounded-full px-4 py-2 transform hover:scale-105 transition-all duration-300"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${
                  mousePosition.y * 10
                }px)`,
              }}
            >
              <Leaf className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-normal">
                Agricultural Excellence
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
              SLeSCA is ensuring high-quality seeds and fostering sustainable growth for
              Sierra Leone's
              <span className="text-green-400 font-semibold">
                {" "}
                food security
              </span>{" "}
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                agricultural development .
              </span>
            
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}
                    >
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-normal">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link
                to={"/about"}
                className="group relative px-4 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-normal shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to={"license-procedures"}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl font-normal text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Certified</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div
                    className={`${stat.color} text-3xl md:text-4xl font-bold mb-1 group-hover:scale-110 transition-transform`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center justify-center space-x-1">
                    <stat.icon className="w-4 h-4" />
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Images */}
              {bannerImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-green-400/20 pointer-events-none"></div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-green-400/10 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3 bg-gradient-to-r from-green-400 to-emerald-500"
                      : "w-3 h-3 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">100%</div>
                  <div className="text-gray-300 text-sm">Organic</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-xl">A+</div>
                  <div className="text-gray-300 text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Banner;

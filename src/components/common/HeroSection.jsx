import React, { useState, useEffect } from "react";
import { Sprout, Leaf, Wheat, ChevronRight, Home } from "lucide-react";

const HeroSection = ({ title = "ABOUT", breadcrumb = "Home . About" }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  // --- FIX APPLIED HERE ---
  // The 'pt-32' class is added to the main content container (z-40)
  // to push the content down, making space for a navbar above it.
  // The 'min-h-[40vh]' is also increased for better visual balance.
  // -------------------------

  return (
    <div className="relative min-h-[30vh] w-full overflow-hidden flex items-center justify-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
        {/* Overlay Gradient Animation */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-600/40 via-emerald-500/40 to-teal-600/40 animate-gradient"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-lime-500/30 via-green-600/30 to-emerald-700/30 animate-gradient-reverse"></div>
        </div>

        {/* Radial Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Leaves and Agricultural Elements (Same as before) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            {particle.id % 3 === 0 ? (
              <Leaf
                className="text-green-300/20"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ) : particle.id % 3 === 1 ? (
              <Wheat
                className="text-emerald-300/20"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ) : (
              <Sprout
                className="text-teal-300/20"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay (Same as before) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="1.5" fill="white" opacity="0.5" />
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content Container - ADDED pt-32 FOR SPACER */}
      <div className="relative z-40 w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 text-center pt-32">
        {/* Decorative Top Badge */}
        {/* <div
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl"
          style={{
            opacity: 0,
            animation: "fadeInDown 0.8s ease-out 0.2s forwards",
          }}
        >
          <Sprout className="w-5 h-5 text-green-300 animate-pulse" />
          <span className="text-white/90 text-sm font-semibold tracking-wider">
            SIERRA LEONE SEED CERTIFICATION AGENCY
          </span>
          <Wheat className="w-5 h-5 text-emerald-300 animate-pulse" />
        </div> */}

        {/* Main Title */}
        <div
          className="mb-5"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.4s forwards",
          }}
        >
          <h1 className="text-5xl  font-extrabold mb-5 ">
            <span className="inline-block bg-gradient-to-r from-green-200 via-emerald-100 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl animate-shimmer-text">
              {title}
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Breadcrumb - Uncommented */}
        {/* <div
          className="flex items-center justify-center space-x-3 text-lg md:text-xl"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.6s forwards",
          }}
        >
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-xl">
            <Home className="w-5 h-5 text-green-300" />
            <span className="text-white/90 font-medium">
              {breadcrumb.split(" . ")[0]}
            </span>
            <ChevronRight className="w-4 h-4 text-green-300" />
            <span className="text-green-300 font-semibold">
              {breadcrumb.split(" . ")[1]}
            </span>
          </div>
        </div> */}

        {/* Bottom Decorative Elements - Uncommented */}
        {/* <div
          className="mt-12 flex justify-center space-x-8"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.8s forwards",
          }}
        >
          {[Sprout, Wheat, Leaf].map((Icon, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Bottom Wave Decoration (Same as before) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 md:h-32 lg:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.05)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="rgba(255, 255, 255, 0.03)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(20px) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-60px) translateX(-20px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-30px) translateX(20px) rotate(270deg);
            opacity: 0.5;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes animate-gradient {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(10%, 10%) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes animate-gradient-reverse {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-10%, -10%) scale(1.1);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes shimmer-text {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .animate-gradient {
          animation: animate-gradient 15s ease infinite;
        }

        .animate-gradient-reverse {
          animation: animate-gradient-reverse 20s ease infinite;
        }

        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmer-text 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

import React, { useState } from "react";
import {
  Award,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  FileCheck,
  Leaf,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutNote = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Quality Regulation",
      description: "Enforcing the highest standards in seed quality",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FileCheck,
      title: "Licensing & Compliance",
      description: "Certifying seed operators across Sierra Leone",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "Farmer Support",
      description: "Empowering farmers with quality seeds",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Food Security",
      description: "Contributing to national agricultural growth",
      color: "from-orange-500 to-amber-600",
    },
  ];

  const achievements = [
    { label: "Licensed Operators", value: "500+" },
    { label: "Certified Seeds", value: "10K+ tons" },
    { label: "Farmers Reached", value: "50K+" },
    { label: "Success Rate", value: "98%" },
  ];

  const keyPoints = [
    "Established under the 2018 Seed Act",
    "National authority for seed quality regulation",
    "Ensuring sustainable agriculture practices",
    "Building food security for Sierra Leone",
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-green-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-semibold text-sm">
                Established 2018
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
                  SLeSCA
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                The{" "}
                <span className="font-bold text-green-700">
                  Sierra Leone Seed Certification Agency (SLeSCA)
                </span>
                , established under the 2018 Seed Act, is the national authority
                for seed quality regulation in Sierra Leone.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                By licensing seed operators, enforcing compliance, and
                certifying seed quality, we support sustainable agriculture and
                national food security. Our commitment extends beyond regulation
                to empowering farmers, promoting innovation, and building a
                resilient agricultural ecosystem.
              </p>
            </div>

            {/* Key Points */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-green-600 mr-2" />
                Our Foundation
              </h3>
              <div className="space-y-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/about"}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to={"/license-procedures"}
                className="group px-8 py-4 bg-white border-2 border-green-600 rounded-xl font-bold text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Leaf className="w-5 h-5" />
                  <span>Get Certified</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Image & Features Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/banner-images/img-9.jpeg"
                  alt="SLeSCA Mission"
                  className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          Since 2018
                        </div>
                        <div className="text-sm text-gray-600">
                          Protecting Sierra Leone's Agriculture
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${
                      feature.color
                    } w-fit mb-3 transform transition-transform duration-300 ${
                      hoveredFeature === index ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Bar */}
        <div className="mt-16 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform">
                  {achievement.value}
                </div>
                <div className="text-green-100 font-medium text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-600 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  Quality Standards
                </h4>
                <p className="text-gray-600 text-sm">
                  We maintain the highest international standards in seed
                  certification and quality assurance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  Farmer Training
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive training programs to empower farmers with modern
                  agricultural practices.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-600 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  Economic Growth
                </h4>
                <p className="text-gray-600 text-sm">
                  Driving agricultural development and contributing to Sierra
                  Leone's economic prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNote;

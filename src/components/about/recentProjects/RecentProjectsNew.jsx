import React, { useState } from "react";
import {
  Leaf,
  Globe,
  TrendingUp,
  HandHeart,
  X,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "National Seed Training Program",
    description:
      "Empowered over 1,000 farmers with knowledge of sustainable seed management practices to enhance crop yields.",
    details:
      "This program focused on equipping farmers with modern seed management techniques, ensuring sustainability, and boosting agricultural productivity. The training involved expert speakers, hands-on sessions, and follow-up evaluations.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-green-500 to-emerald-600",
    date: "January 2024",
    location: "Freetown, Sierra Leone",
    participants: "1,000+ Farmers",
    impact: "35% Increase in Yields",
    achievements: [
      "Trained 1,000+ farmers",
      "Distributed quality seeds",
      "Ongoing support programs",
      "Sustainable practices adopted",
    ],
  },
  {
    id: 2,
    title: "ECOWAS Seed Standards Alignment",
    description:
      "Successfully aligned Sierra Leone's seed regulations with ECOWAS standards, ensuring regional competitiveness.",
    details:
      "Through rigorous policy analysis and collaboration with regional bodies, this project ensured that Sierra Leone's seed regulations meet ECOWAS standards. This enhances trade opportunities and ensures high-quality seed production.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    color: "from-blue-500 to-cyan-600",
    date: "March 2024",
    location: "Regional Partnership",
    participants: "15 Countries",
    impact: "100% Compliance",
    achievements: [
      "Regional standards met",
      "Trade opportunities opened",
      "Policy framework established",
      "International recognition",
    ],
  },
  {
    id: 3,
    title: "Seed Quality Enhancement Drive",
    description:
      "Inspected and certified over 50 seed processing facilities to ensure compliance with quality standards.",
    details:
      "Our team conducted detailed inspections and provided certification to facilities meeting national and international quality benchmarks. This initiative aimed to strengthen the seed value chain.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    color: "from-purple-500 to-pink-600",
    date: "May 2024",
    location: "Nationwide",
    participants: "50+ Facilities",
    impact: "98% Quality Rate",
    achievements: [
      "50+ facilities certified",
      "Quality standards improved",
      "Supply chain strengthened",
      "Best practices implemented",
    ],
  },
  {
    id: 4,
    title: "Farmer Assistance Program",
    description:
      "Collaborated with international organizations to provide financial and technical support to farmers in rural areas.",
    details:
      "This program provided financial grants, technical assistance, and resource distribution to rural farmers, ensuring equitable development and improved agricultural output.",
    icon: HandHeart,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    color: "from-orange-500 to-amber-600",
    date: "July 2024",
    location: "Rural Communities",
    participants: "2,000+ Farmers",
    impact: "$500K Distributed",
    achievements: [
      "Financial grants provided",
      "Technical assistance given",
      "Resources distributed",
      "Rural development boosted",
    ],
  },
];

const RecentProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #10b981 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Our Impact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
              Recent Projects
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the impactful projects led by SLeSCA to enhance agriculture
            and promote sustainable development across Sierra Leone.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 left-4 p-4 bg-gradient-to-br ${
                    project.color
                  } rounded-2xl shadow-xl transform transition-all duration-300 ${
                    hoveredCard === index ? "scale-110 rotate-3" : ""
                  }`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gray-700" />
                    <span className="text-xs font-semibold text-gray-700">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Quick Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-600">Participants</div>
                    <div className="text-sm font-bold text-gray-900">
                      {project.participants}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xs text-gray-600">Impact</div>
                    <div className="text-sm font-bold text-gray-900">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Learn More Button */}
                <button className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-b-[64px] border-r-[64px] border-b-transparent opacity-10 ${
                    hoveredCard === index
                      ? "border-r-green-500"
                      : "border-r-gray-300"
                  } transition-colors duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Want to Join Our Next Project?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Be part of our mission to transform agriculture in Sierra Leone.
                Together, we can achieve more.
              </p>
              <Link
                to={"/contact-us"}
                className="group/btn w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Involved</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-72 overflow-hidden rounded-t-3xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Icon */}
              <div
                className={`absolute top-4 left-4 p-4 bg-gradient-to-br ${selectedProject.color} rounded-2xl shadow-xl`}
              >
                <selectedProject.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{selectedProject.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedProject.participants}
                  </div>
                  <div className="text-xs text-gray-600">Participants</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
                  <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedProject.impact}
                  </div>
                  <div className="text-xs text-gray-600">Impact</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
                  <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedProject.location}
                  </div>
                  <div className="text-xs text-gray-600">Location</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProject.details}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Contact Us About This Project
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300">
                  Share This Project
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}

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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default RecentProjectsComponent;

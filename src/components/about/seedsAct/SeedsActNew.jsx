import React, { useState } from "react";
import {
  CheckCircle2,
  BookOpen,
  Sprout,
  Scale,
  Download,
  FileText,
  Users,
  Shield,
  Award,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Calendar,
  Building2,
  Gavel,
  Target,
} from "lucide-react";

const sections = [
  {
    title: "Seed Licensing and Regulation",
    description:
      "The 2018 Seed Act empowers SLeSCA to regulate seed quality, ensuring all operators comply with national standards.",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-600",
    details:
      "Establishes comprehensive framework for licensing seed operators, processors, and vendors across Sierra Leone.",
  },
  {
    title: "National Seed Catalogue",
    description:
      "The Act mandates the maintenance of a National Seed Catalogue, updated regularly to reflect ECOWAS standards.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    details:
      "Ensures only approved, tested varieties are available to farmers, protecting agricultural productivity.",
  },
  {
    title: "Farmers' Rights",
    description:
      "The Seed Act promotes sustainable farming practices and protects farmers' rights to access quality seeds.",
    icon: Sprout,
    color: "from-teal-500 to-cyan-600",
    details:
      "Guarantees farmers' access to certified seeds and protects traditional farming knowledge and practices.",
  },
  {
    title: "Compliance and Enforcement",
    description:
      "Strict penalties and regular inspections ensure adherence to the Seed Act, safeguarding agricultural integrity.",
    icon: Scale,
    color: "from-cyan-500 to-blue-600",
    details:
      "Establishes enforcement mechanisms and penalties for non-compliance to maintain industry standards.",
  },
];

const keyProvisions = [
  {
    icon: Building2,
    title: "Establishment of SLeSCA",
    description:
      "Creates the Sierra Leone Seed Certification Agency as the regulatory authority",
    year: "2018",
  },
  {
    icon: Shield,
    title: "Quality Standards",
    description:
      "Sets minimum quality requirements for all seeds sold in Sierra Leone",
    year: "2018",
  },
  {
    icon: Users,
    title: "Stakeholder Protection",
    description: "Protects rights of farmers, seed producers, and consumers",
    year: "2018",
  },
  {
    icon: Award,
    title: "ECOWAS Alignment",
    description: "Aligns national standards with regional ECOWAS requirements",
    year: "2018",
  },
];

const timeline = [
  {
    year: "2018",
    event: "Seed Act Enacted",
    description: "Parliament passes the Seeds Act",
  },
  {
    year: "2019",
    event: "SLeSCA Established",
    description: "Agency begins operations",
  },
  {
    year: "2020",
    event: "First Certifications",
    description: "Initial seed certifications issued",
  },
  {
    year: "2024",
    event: "Full Implementation",
    description: "Complete regulatory framework active",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Quality Assurance",
    value: "98%",
    description: "of seeds meet standards",
  },
  {
    icon: Users,
    title: "Farmers Protected",
    value: "50K+",
    description: "farmers accessing quality seeds",
  },
  {
    icon: Award,
    title: "Licensed Operators",
    value: "1000+",
    description: "certified seed businesses",
  },
  {
    icon: Shield,
    title: "Compliance Rate",
    value: "95%",
    description: "industry compliance achieved",
  },
];

const SeedsActComponent = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleDownload = ({ document }) => {
    // Replace with the actual URL of the Seeds Act PDF
    let pdfUrl = "";
    if (document === "seedAct") {
      pdfUrl = "/national_seed_act.pdf";
    } else {
      pdfUrl = "/national_seed_catalogue.pdf";
    }
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-green-50 to-white py-16 lg:py-24 overflow-hidden">
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

      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Legal Framework
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
              The 2018 Seed Act
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Learn about the cornerstone of Sierra Leone's seed quality and
            regulation framework that protects farmers and ensures agricultural
            excellence.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
                alt="Seed Act"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent"></div>

              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <Gavel className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        Enacted 2018
                      </div>
                      <div className="text-sm text-gray-600">
                        National Seed Legislation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About the Seed Act
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The 2018 Seed Act established the Sierra Leone Seed Certification
              Agency (SLeSCA), laying the foundation for regulating seed
              quality, ensuring compliance, and fostering sustainable
              agriculture.
            </p>
            <div className="space-y-3">
              {[
                "Empowers farmers with access to quality seeds",
                "Protects agricultural rights and practices",
                "Promotes sustainable farming standards",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleDownload({ document: "seedAct" })}
              className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Act</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-2">
            {["overview", "provisions", "timeline"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Key Sections - Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <div
                  className={`bg-gradient-to-r ${section.color} p-6 relative overflow-hidden`}
                >
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
                  <div className="relative">
                    <section.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {section.description}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSection === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500 mb-4">
                      <p className="text-gray-700 text-sm">{section.details}</p>
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-green-600 font-bold text-sm group-hover:text-green-700">
                    <span>
                      {expandedSection === index ? "Show Less" : "Learn More"}
                    </span>
                    {expandedSection === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Provisions Tab */}
        {activeTab === "provisions" && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-12">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Key Provisions
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {keyProvisions.map((provision, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex-shrink-0">
                      <provision.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">
                          {provision.title}
                        </h4>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          {provision.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {provision.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === "timeline" && (
          <div className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-12">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                Implementation Timeline
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500 hidden md:block"></div>

                <div className="space-y-8">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-0 md:pl-20">
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <Calendar className="w-5 h-5 text-green-600" />
                          <span className="text-2xl font-bold text-green-700">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {item.event}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Stats */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden mb-16">
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

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Impact & Benefits
              </h3>
              <p className="text-white/90 text-lg">
                Measurable results since implementation
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-4xl font-extrabold text-white mb-2">
                    {benefit.value}
                  </div>
                  <div className="text-white font-bold mb-1">
                    {benefit.title}
                  </div>
                  <div className="text-white/80 text-xs">
                    {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-12">
            <Target className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Explore the full 2018 Seed Act to understand its provisions and
              benefits for Sierra Leone's agriculture sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleDownload({ document: "seedAct" })}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download the Seed Act</span>
              </button>
              <button
                onClick={() => handleDownload({ document: "" })}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download the Seed Catalogue</span>
              </button>
              {/* <button className="flex items-center justify-center space-x-2 bg-white border-2 border-green-600 text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300">
                <FileText className="w-5 h-5" />
                <span>View Summary</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default SeedsActComponent;

import React, { useState, useEffect, useCallback } from "react";
import {
  Download,
  FileText,
  Folder,
  Printer,
  Share2,
  Search,
  Filter,
  X,
  Eye,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const DOC_BASE_PATH = "/";

const documents = [
  // Application Templates
  {
    id: 1,
    title: "Sample Application Letter for SLeSCA",
    description:
      "This document provides a template for writing a formal application letter to the Sierra Leone Seed Certification Authority (SLeSCA).",
    category: "Application Templates",
    link: "/sample_application_letter.pdf",
  },
  // Licensing & Registration
  {
    id: 2,
    title: "Step-by-Step Guide to Obtaining a Seed License",
    description:
      "Detailed steps for obtaining a seed license from SLeSCA, including compliance requirements.",
    category: "Licensing & Registration",
    link: "/procedure_for_obtaining_license.pdf",
  },
  {
    id: 11,
    title: "Registration of Plant Breeders",
    description:
      "Information on the registration process for plant breeders in Sierra Leone.",
    category: "Licensing & Registration",
    link: `/registration_of_plant_breeders.pdf`,
  },
  {
    id: 12,
    title: "Registration of Seed Importers/Exporters",
    description:
      "Registration process for seed importers and exporters in Sierra Leone.",
    category: "Licensing & Registration",
    link: `/registration_of_seed_importers.pdf`,
  },
  {
    id: 13,
    title: "Registration of Seed Processors",
    description: "Details on registering as a seed processor in Sierra Leone.",
    category: "Licensing & Registration",
    link: `/registration_of_seed_processor.pdf`,
  },
  {
    id: 14,
    title: "Registration of Seed Producers",
    description: "Registration process for seed producers in Sierra Leone.",
    category: "Licensing & Registration",
    link: `/registration_of_seed_producers.pdf`,
  },
  {
    id: 15,
    title: "Registration of Seed Vendors",
    description: "Details on registering as a seed vendor in Sierra Leone.",
    category: "Licensing & Registration",
    link: `/registration_of_seed_vendor.pdf`,
  },
  // Seed Testing & Quality Control
  {
    id: 3,
    title: "Procedure to Request a Seed Test",
    description:
      "Guidelines for submitting seed samples for quality testing at SLeSCA laboratory.",
    category: "Seed Testing & Quality Control",
    link: `/request_seed_test.pdf`,
  },
  // Vendor & Grower Management
  {
    id: 4,
    title: "Criteria for Seed Shop Management",
    description:
      "Guidelines for managing a seed shop as a certified seed vendor.",
    category: "Vendor & Grower Management",
    link: "/seed_shop_criteria_vendor.pdf",
  },
  {
    id: 16,
    title: "SLeSCA Vendor and Grower Endorsement",
    description:
      "Process for SLeSCA to endorse vendors and growers in Sierra Leone.",
    category: "Vendor & Grower Management",
    link: `/slesca_vendor_endorse.pdf`,
  },
  // Regulatory & Compliance
  {
    id: 5,
    title: "Notice for Seed Import/Export",
    description:
      "Regulations and guidelines for importing and exporting seeds in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/notice_for_seed_import.pdf`,
  },
  {
    id: 6,
    title: "Notice for Seed Processing",
    description:
      "Standards and procedures for seed processing in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/notice_for_seed_processing.pdf`,
  },
  {
    id: 7,
    title: "Notice for Seed Production",
    description: "Regulations for seed production in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/notice_for_seed_production.pdf`,
  },
  {
    id: 8,
    title: "Notice for Seed Selling",
    description: "Regulations for selling seeds in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/notice_for_seeding_selling.pdf`,
  },
  {
    id: 10,
    title: "Reasons for Compliance with Seed Laws",
    description:
      "Importance of complying with seed laws and regulations in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/reason_for_seed_compliance_law.pdf`,
  },
  {
    id: 17,
    title: "Standard Regulatory Procedures for Seed Producers",
    description:
      "Guidelines for compliance with seed production regulations in Sierra Leone.",
    category: "Regulatory & Compliance",
    link: `/regulatory_procedure_for_seed_producer.pdf`,
  },
  {
    id: 19,
    title: "Legal Standard Regulatory Procedures for Seed Producers",
    description:
      "Legal regulatory guidelines for seed producers to ensure compliance with national laws.",
    category: "Regulatory & Compliance",
    link: `/legal_standard_for_seed_producers.pdf`,
  },
];
// --- END: Document Data with Placeholder Links ---

const DocumentComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCategories, setExpandedCategories] = useState({});
  const [viewingDoc, setViewingDoc] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(documents.map((doc) => doc.category))];

  // Effect to expand all categories by default on first load
  useEffect(() => {
    const initialExpansion = categories
      .filter((c) => c !== "All")
      .reduce((acc, category) => ({ ...acc, [category]: true }), {});
    setExpandedCategories(initialExpansion);
  }, []);

  // Filter documents
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group by category
  const categorizedDocuments = filteredDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const getCategoryColor = (category) => {
    const colors = {
      "Application Templates": "from-blue-600 to-blue-700",
      "Licensing & Registration": "from-green-600 to-green-700",
      "Seed Testing & Quality Control": "from-teal-600 to-cyan-700",
      "Vendor & Grower Management": "from-emerald-600 to-green-700",
      "Regulatory & Compliance": "from-slate-600 to-slate-700",
    };
    return colors[category] || "from-gray-600 to-gray-700";
  };

  // --- Enhanced Action Handlers ---

  const handleAction = useCallback(async (action, doc) => {
    if (!doc.link) {
      alert(`The document '${doc.title}' does not have a valid link.`);
      return;
    }

    switch (action) {
      case "view":
        // Show in the modal (using the iframe approach)
        setViewingDoc(doc);
        break;
      case "download":
        // Create a temporary anchor element to force download
        const a = document.createElement("a");
        a.href = doc.link;
        a.download = doc.title.replace(/\s/g, "_") + ".pdf"; // Suggest a filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        break;
      case "print":
        // Open in a new tab and immediately call print
        const printWindow = window.open(doc.link, "_blank");
        // Check if the print window was successfully opened
        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print();
          };
        } else {
          alert(
            "Could not open print window. Please check your browser pop-up blocker settings."
          );
        }
        break;
      case "share":
        if (navigator.share) {
          try {
            await navigator.share({
              title: doc.title,
              text: doc.description,
              url: window.location.origin + doc.link, // Use the full URL
            });
          } catch (error) {
            console.error("Error sharing document:", error);
          }
        } else {
          alert(
            "Sharing is not supported in your browser. Copy the link to share."
          );
        }
        break;
      default:
        console.warn(`Unknown action: ${action}`);
    }
  }, []);

  // --- Keyboard accessibility for the modal ---
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape" && viewingDoc) {
        setViewingDoc(null);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [viewingDoc]);

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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Resource Library
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
              SLeSCA Documents
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Access official documents and guidelines essential for seed
            certification, licensing, and regulation in Sierra Leone.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Found{" "}
            <span className="font-bold text-green-700">
              {filteredDocuments.length}
            </span>{" "}
            document{filteredDocuments.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Documents by Category */}
        {Object.entries(categorizedDocuments).map(([category, docs]) => (
          <div key={category} className="mb-8">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className={`w-full flex items-center justify-between bg-gradient-to-r ${getCategoryColor(
                category
              )} text-white py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6`}
            >
              <div className="flex items-center space-x-3">
                <Folder className="w-6 h-6" />
                <h3 className="text-xl font-bold">{category}</h3>
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                  {docs.length} {docs.length === 1 ? "document" : "documents"}
                </span>
              </div>
              {expandedCategories[category] ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            {/* Documents Grid */}
            {expandedCategories[category] !== false && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                  <div
                    key={doc.id}
                    className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-green-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Document Header */}
                    <div
                      className={`bg-gradient-to-r ${getCategoryColor(
                        category
                      )} p-4`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        {/* You might add file size or date here if available */}
                      </div>
                    </div>

                    {/* Document Body */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors">
                        {doc.title}
                      </h4>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {doc.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAction("view", doc)}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                          disabled={!doc.link}
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">View</span>
                        </button>

                        <button
                          onClick={() => handleAction("download", doc)}
                          className="p-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-all duration-300 disabled:opacity-50"
                          title="Download"
                          disabled={!doc.link}
                        >
                          <Download className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleAction("print", doc)}
                          className="p-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-all duration-300 disabled:opacity-50"
                          title="Print"
                          disabled={!doc.link}
                        >
                          <Printer className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleAction("share", doc)}
                          className="p-3 bg-orange-100 text-orange-700 rounded-xl hover:bg-orange-200 transition-all duration-300 disabled:opacity-50"
                          title="Share"
                          disabled={!doc.link}
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex p-6 bg-gray-100 rounded-full mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No documents found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Document Viewer Modal */}
      {viewingDoc && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setViewingDoc(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${getCategoryColor(
                viewingDoc.category
              )} p-6 flex items-center justify-between flex-shrink-0`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3
                    id="modal-title"
                    className="text-2xl font-bold text-white"
                  >
                    {viewingDoc.title}
                  </h3>
                  <p className="text-white/90 text-sm">{viewingDoc.category}</p>
                </div>
              </div>
              <button
                onClick={() => setViewingDoc(null)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                aria-label="Close document viewer"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Body - PDF Viewer (using iframe) */}
            <div className="flex-1 overflow-hidden p-0 relative">
              {/* iframe is the standard way to embed and view external PDFs */}
              <iframe
                src={viewingDoc.link}
                title={`Document Viewer: ${viewingDoc.title}`}
                className="w-full h-full border-0"
                style={{ minHeight: "800px" }}
                loading="lazy"
              >
                {/* Fallback for browsers that don't support iframes or PDF viewing */}
                <div className="p-8 text-center bg-gray-50 h-full flex flex-col justify-center items-center">
                  <ExternalLink className="w-10 h-10 text-gray-500 mb-4" />
                  <p className="text-gray-700 mb-4">
                    Your browser does not support embedded PDF viewing.
                  </p>
                  <a
                    href={viewingDoc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-600 font-semibold hover:text-green-800 transition"
                  >
                    <span>Click here to open in a new tab</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </iframe>
            </div>

            {/* Modal Footer - Quick Actions */}
            <div className="flex-shrink-0 p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => handleAction("download", viewingDoc)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => handleAction("print", viewingDoc)}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Printer className="w-5 h-5" />
                  <span>Print</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default DocumentComponent;

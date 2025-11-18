// import React from "react";
// import { FaDownload, FaFilePdf, FaFolderOpen, FaPrint, FaShare } from "react-icons/fa";
// import sample_letter from '../../document/sample-application-letter-SLeSCA.pdf';
// import step_by_step_guid from '../../document/Produres-obtaining-license-SLeSCA.pdf';
// import seed_laboratory from '../../document/Procedure-Request-seed-test-at-the-SLeSCA-Seed-Laboratory.pdf';
// import managment_seed_vendor from '../../document/Management-Seed-Vendor-.pdf';
// import Citeria_for_Seed_Shop_Management_as_a_Seed_Vendor from '../../document/Citeria-for-Seed-Shop-Management-as-a-Seed-Vendor.pdf';
// import Legal_Standard_Regulatory_Procedures_for_Seed_Producers from '../../document/Legal-Standard-Regulatory-Procedures-for-Seed-Producers-in-Sierra-Leone.pdf';
// import Notice_for_Seed_Import_Export from '../../document/Notice-for-Seed-Import-Export.pdf';
// import Notice_for_Seed_Processing from '../../document/Notice-for-Seed-Processing.pdf';
// import Notice_for_Seed_Production from '../../document/Notice-for-Seed-Production.pdf';
// import Notice_Seed_Selling from '../../document/Notice-Seed-Selling.pdf';
// import Procedure_to_Request_a_seed_test_at_the_SLeSCA_Seed_Laboratory from '../../document/Procedure-to-Request-a-seed-test-at-the-SLeSCA-Seed-Laboratory.pdf';
// import Reasons_for_Compliance_with_Seed_Laws_and_Regulations from '../../document/Reasons-for-Compliance-with-Seed-Laws-and-Regulations.pdf';
// import REGISTRATION_OF_PLANT_BREEDERS from '../../document/REGISTRATION-OF-PLANT-BREEDERS.pdf';
// import REGISTRATION_OF_SEED_IMPORTERS_EXPORTERS from '../../document/REGISTRATION-OF-SEED-IMPORTERS-EXPORTERS.pdf';
// import REGISTRATION_OF_SEED_PROCESSORS from '../../document/REGISTRATION-OF-SEED-PROCESSORS.pdf';
// import REGISTRATION_OF_SEED_PRODUCERS from '../../document/REGISTRATION-OF-SEED-PRODUCERS.pdf';
// import REGISTRATION_OF_SEED_VENDORS from '../../document/REGISTRATION-OF-SEED-VENDORS.pdf';
// import SLeSCA_to_Endorse_Vendor_and_Grower_role from '../../document/SLeSCA-to-Endorse-Vendor-and-Grower-role.pdf';
// import Standard_Regulatory_Procedures_for_Seed_Producer_in_Sierra_Leone from '../../document/Standard-Regulatory-Procedures-for-Seed-Producer-in-Sierra-Leone.pdf';

// const documents = [
//   // Application Templates
//   {
//     id: 1,
//     title: "Sample Application Letter for SLeSCA",
//     description: "This document provides a template for writing a formal application letter to the Sierra Leone Seed Certification Authority (SLeSCA).",
//     category: "Application Templates",
//     link: sample_letter,
//   },

//   // Licensing & Registration
//   {
//     id: 2,
//     title: "Step-by-Step Guide to Obtaining a Seed License",
//     description: "Detailed steps for obtaining a seed license from SLeSCA, including compliance requirements.",
//     category: "Licensing & Registration",
//     link: step_by_step_guid,
//   },
//   {
//     id: 11,
//     title: "Registration of Plant Breeders",
//     description: "Information on the registration process for plant breeders in Sierra Leone.",
//     category: "Licensing & Registration",
//     link: REGISTRATION_OF_PLANT_BREEDERS,
//   },
//   {
//     id: 12,
//     title: "Registration of Seed Importers/Exporters",
//     description: "Registration process for seed importers and exporters in Sierra Leone.",
//     category: "Licensing & Registration",
//     link: REGISTRATION_OF_SEED_IMPORTERS_EXPORTERS,
//   },
//   {
//     id: 13,
//     title: "Registration of Seed Processors",
//     description: "Details on registering as a seed processor in Sierra Leone.",
//     category: "Licensing & Registration",
//     link: REGISTRATION_OF_SEED_PROCESSORS,
//   },
//   {
//     id: 14,
//     title: "Registration of Seed Producers",
//     description: "Registration process for seed producers in Sierra Leone.",
//     category: "Licensing & Registration",
//     link: REGISTRATION_OF_SEED_PRODUCERS,
//   },
//   {
//     id: 15,
//     title: "Registration of Seed Vendors",
//     description: "Details on registering as a seed vendor in Sierra Leone.",
//     category: "Licensing & Registration",
//     link: REGISTRATION_OF_SEED_VENDORS,
//   },

//   // Seed Testing & Quality Control
//   {
//     id: 3,
//     title: "Procedure to Request a Seed Test at the SLeSCA Seed Laboratory",
//     description: "Guidelines for submitting seed samples for quality testing.",
//     category: "Seed Testing & Quality Control",
//     link: seed_laboratory,
//   },
//   {
//     id: 9,
//     title: "Procedure to Request a Seed Test at the SLeSCA Seed Laboratory",
//     description: "Explains the procedure for submitting seed samples for quality testing.",
//     category: "Seed Testing & Quality Control",
//     link: Procedure_to_Request_a_seed_test_at_the_SLeSCA_Seed_Laboratory,
//   },

//   // Vendor & Grower Management
//   {
//     id: 4,
//     title: "Criteria for Seed Shop Management as a Seed Vendor",
//     description: "Guidelines for managing a seed shop as a certified seed vendor.",
//     category: "Vendor & Grower Management",
//     link: managment_seed_vendor,
//   },
//   {
//     id: 18,
//     title: "Criteria for Seed Shop Management as a Seed Vendor",
//     description: "Best practices for managing a seed shop as a certified seed vendor.",
//     category: "Vendor & Grower Management",
//     link: Citeria_for_Seed_Shop_Management_as_a_Seed_Vendor,
//   },
//   {
//     id: 16,
//     title: "SLeSCA to Endorse Vendor and Grower Role",
//     description: "Process for SLeSCA to endorse vendors and growers in Sierra Leone.",
//     category: "Vendor & Grower Management",
//     link: SLeSCA_to_Endorse_Vendor_and_Grower_role,
//   },

//   // Regulatory & Compliance
//   {
//     id: 5,
//     title: "Notice for Seed Import/Export",
//     description: "Regulations and guidelines for importing and exporting seeds in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Notice_for_Seed_Import_Export,
//   },
//   {
//     id: 6,
//     title: "Notice for Seed Processing",
//     description: "Standards and procedures for seed processing in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Notice_for_Seed_Processing,
//   },
//   {
//     id: 7,
//     title: "Notice for Seed Production",
//     description: "Regulations for seed production in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Notice_for_Seed_Production,
//   },
//   {
//     id: 8,
//     title: "Notice for Seed Selling",
//     description: "Regulations for selling seeds in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Notice_Seed_Selling,
//   },
//   {
//     id: 10,
//     title: "Reasons for Compliance with Seed Laws and Regulations",
//     description: "Importance of complying with seed laws and regulations in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Reasons_for_Compliance_with_Seed_Laws_and_Regulations,
//   },
//   {
//     id: 17,
//     title: "Standard Regulatory Procedures for Seed Producers in Sierra Leone",
//     description: "Guidelines for compliance with seed production regulations in Sierra Leone.",
//     category: "Regulatory & Compliance",
//     link: Standard_Regulatory_Procedures_for_Seed_Producer_in_Sierra_Leone,
//   },
//   {
//     id: 19,
//     title: "Legal Standard Regulatory Procedures for Seed Producers in Sierra Leone",
//     description: "Legal regulatory guidelines for seed producers to ensure compliance with national laws.",
//     category: "Regulatory & Compliance",
//     link: Legal_Standard_Regulatory_Procedures_for_Seed_Producers,
//   }
// ];

// const DocumentComponent = () => {
//   const handleViewDocument = (link) => {
//     window.open(link, "_blank");
//   };

//   const handlePrintDocument = (link) => {
//     window.open(link, "_blank").print();
//   };

//   const handleShareDocument = async (title, link) => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: title,
//           url: link,
//         });
//       } catch (error) {
//         console.error("Error sharing document:", error);
//       }
//     } else {
//       alert("Sharing is not supported in your browser.");
//     }
//   };

//   // Group documents by category
//   const categorizedDocuments = documents.reduce((acc, doc) => {
//     if (!acc[doc.category]) {
//       acc[doc.category] = [];
//     }
//     acc[doc.category].push(doc);
//     return acc;
//   }, {});

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-green-800">SLeSCA Documents</h2>
//           <p className="text-gray-600 mt-4 text-lg">
//             Access official documents and guidelines essential for seed certification, licensing, and regulation.
//           </p>
//         </div>

//         {Object.entries(categorizedDocuments).map(([category, docs]) => (
//           <div key={category} className="mb-12">
//             {/* Category Header */}
//             <h3 className="text-2xl font-bold text-white bg-green-700 py-3 px-6 rounded-lg
//             shadow-md inline-block mb-6">
//               {category}
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {docs.map((doc) => (
//                 <div
//                   key={doc.id}
//                   className="bg-white shadow-lg p-6 rounded-lg border border-gray-200 hover:shadow-2xl
//                   transition transform hover:-translate-y-1"
//                 >
//                   <div className="flex items-center mb-4">
//                     <FaFilePdf className="text-red-600 text-4xl mr-4" />
//                     <h4 className="text-xl font-semibold text-green-900">{doc.title}</h4>
//                   </div>
//                   <p className="text-gray-600">{doc.description}</p>

//                   <div className="mt-6 flex justify-between items-center">
//                     <span className="text-sm text-gray-500 flex items-center gap-2">
//                       <FaFolderOpen className="text-green-600" /> {doc.category}
//                     </span>
//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => handleViewDocument(doc.link)}
//                         className="px-4 py-2 bg-green-700 text-white text-sm rounded-md hover:bg-green-800
//                         flex items-center gap-2 transition"
//                       >
//                         <FaDownload /> View
//                       </button>
//                       <button
//                         onClick={() => handlePrintDocument(doc.link)}
//                         className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700
//                         flex items-center gap-2 transition"
//                       >
//                         <FaPrint /> Print
//                       </button>
//                       <button
//                         onClick={() => handleShareDocument(doc.title, doc.link)}
//                         className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700
//                         flex items-center gap-2 transition"
//                       >
//                         <FaShare /> Share
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default DocumentComponent;

import React from "react";
import HeroSection from "../components/common/HeroSection";
import BoardOfDirectors from "../components/team/BoardOfDirectors";
import user from "../image/user.png";
import mansaray from "../image/team/mansaray.jpeg";
import francisWill from "../image/team/francis_will.jpeg";
import robertChakanda from "../image/team/robert_chakanda.jpeg";
import sahrAmara from "../image/team/shar_amara.jpeg";
import mosesTumbah from "../image/team/moses_tumbah.jpeg";
import kumbaKamara from "../image/team/kumba_kamara.jpeg";
import janetSesay from "../image/team/janet_sesay.jpeg";
import bernadetteTucker from "../image/team/bernadette_tucker.jpeg";
import abdulKarimKargbo from "../image/team/abdul_karim_kargbo.jpeg";
import TeamsComponent from "../components/team/TeamsComponent";

const fieldStaffs = [
  {
    name: "Christopher Woodie",
    role: "Senior Field Technician",
    image: user,
  },
  {
    name: "Thomas Tucker",
    role: "Field Technician",
    image: user,
  },
  {
    name: "Abdul Deen Kamara",
    role: "Seed Analist",
    image: user,
  },
  {
    name: "Nancy Moiforay",
    role: "Seed Technician",
    image: user,
  },
  {
    name: "Hawa Korfuma",
    role: "Seed Technician",
    image: user,
  },

  {
    name: "N'ganga MB Bockarie",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Nanah Kargbo",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Mohamed Williams",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Momodu Dumere",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Moriba Musa Koroma",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alpha Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sahr Gbetuwa",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abraham Konda Sesay",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sorie Kamara Conteh",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alfred Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Yayah Daramy",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Gibril",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Hassan Kamara (Kassiri)",
    role: "Field Inspector",
    image: user,
  },
];

const headOfficeLabTeam = [
  {
    name: "Ngegba Kamara",
    role: "Laboratory Attendant",
    image: user,
  },
  {
    name: "Yabome Efua Ajai Kamara",
    role: "Laboratry Assistnt",
    image: user,
  },
];

const managementTeam = [
  {
    name: "Robert Chakanda (PhD)",
    role: "Executive Director",
    image: robertChakanda,
    bio: "Professional expertise in Seed Systems in Africa, Commercial Seed Production and Seed-Related Agro-businesses; Training and Capacity building, Micro-financing; Market access and Opportunities for farmers.",
    expertise: ["Seed Specialist"],
    education: "Phd in Biosystematics, Taxonomy and Plant Genetic Resources",
    experience: "16+ years in leadership roles",
    email: "robert.chakanda@slesca.gov.sl",
    linkedin: "https://www.linkedin.com/in/robert-chakanda-b0a2378/",
  },
  {
    name: "Dr. Momoh Turay",
    role: "Senior Technical Head - Field",
    image: user,
  },
  {
    name: "Dr. Janatu V. Sesay",
    role: "Senior Technical Head - Laboratories",
    image: janetSesay,
  },
  {
    name: "Ibrahim S. Mansaray",
    role: "Head of Secretariat",
    image: mansaray,
  },
  {
    name: "Sahr Amara",
    role: "Admin/HR",
    image: sahrAmara,
  },
  {
    name: "Sia Jamie Hamore",
    role: "Deputy HR/Admin",
    image: user,
  },
  {
    name: "Mustapha David Jah",
    role: "Acting Accountant",
    image: user,
  },
  {
    name: "Hassanatu Sheriff",
    role: "Acting Deputy Accountant",
    image: user,
  },
  {
    name: "Abdul Karim Kargbo",
    role: "Seed-Business Adviser",
    image: abdulKarimKargbo,
  },
  {
    name: "Francis Will",
    role: "Innovation Officer",
    image: francisWill,
  },
  {
    name: "Kumba Sheku-Kamara",
    role: "Technical Crops/Projects Officer",
    image: kumbaKamara,
  },
  {
    name: "Moses Tumbe",
    role: "Public Relations Officer",
    image: mosesTumbah,
  },
  {
    name: "Adama J. Kamara",
    role: "Field Technician - Border Control",
    image: user,
  },
  {
    name: "Salia Jeigula",
    role: "Logistics Officer",
    image: user,
  },
  {
    name: "Stephine E.K Williams",
    role: "Confidential Technician",
    image: user,
  },
  {
    name: "Mrs. Kadiatu Kpakiwa",
    role: "Laboratory Technician",
    image: user,
  },
  {
    name: "Josephine Koroma",
    role: "Confidential Technician",
    image: user,
  },
  {
    name: "Millicent Swarray",
    role: "Data Officer",
    image: user,
  },
];

const mile91LabTeam = [
  {
    name: "Christopher Woodie",
    role: "Senior Field Technician",
    image: user,
  },
  {
    name: "Thomas Tucker",
    role: "Field Technician",
    image: user,
  },
  {
    name: "Abdul Deen Kamara",
    role: "Seed Analist",
    image: user,
  },
  {
    name: "Nancy Moiforay",
    role: "Seed Technician",
    image: user,
  },
  {
    name: "Hawa Korfuma",
    role: "Seed Technician",
    image: user,
  },
  {
    name: "Ngegba Kamara",
    role: "Laboratory Attendant",
    image: user,
  },
  {
    name: "Yabome Efua Ajai Kamara",
    role: "Laboratry Assistnt",
    image: user,
  },
  {
    name: "N'ganga MB Bockarie",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Nanah Kargbo",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Mohamed Williams",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Momodu Dumere",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Moriba Musa Koroma",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alpha Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sahr Gbetuwa",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abraham Konda Sesay",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sorie Kamara Conteh",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alfred Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Yayah Daramy",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Gibril",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Hassan Kamara (Kassiri)",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Umaru K. Kamara",
    role: "Intern",
    image: user,
  },
  {
    name: "Esther C. Turay",
    role: "Intern",
    image: user,
  },
  {
    name: "Issa l. Koroma",
    role: "Intern",
    image: user,
  },
];

const interns = [
  {
    name: "Umaru K. Kamara",
    role: "Intern",
    image: user,
  },
  {
    name: "Esther C. Turay",
    role: "Intern",
    image: user,
  },
  {
    name: "Issa l. Koroma",
    role: "Intern",
    image: user,
  },
];

const OurTeam = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Our Team" breadcrumb="Home . Team" />
        <div
          className=" w-full py-10 flex flex-col justify-center
          items-center mt-5 mb-5"
        >
          <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
            {/* Introductory Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-green-800">
                Meet the Team Behind SLeSCA
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Our dedicated team at Sierra Leone Seed Certification Agency
                (SLeSCA) is committed to transforming agriculture in Sierra
                Leone. From strategic leadership provided by our Board of
                Directors to the operational excellence of our Management Team,
                every individual plays a pivotal role in ensuring seed quality
                and compliance, fostering sustainable development, and
                empowering farmers.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center">
          <BoardOfDirectors />
          <TeamsComponent
            teamMembers={managementTeam}
            title="Management Team"
          />
          <TeamsComponent
            teamMembers={headOfficeLabTeam}
            title="Head Office Lab Team"
          />
          <TeamsComponent
            teamMembers={mile91LabTeam}
            title="Mile 91 Lab Team"
          />
          <TeamsComponent teamMembers={fieldStaffs} title="Field Staffs" />
          <TeamsComponent teamMembers={interns} title="Interns" />
        </div>
      </div>
    </>
  );
};

export default OurTeam;

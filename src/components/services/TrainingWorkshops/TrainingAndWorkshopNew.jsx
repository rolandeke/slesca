import React, { useState } from "react";
import {
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  Target,
  Network,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  User,
  CreditCard,
  Mail,
  Star,
  ChevronRight,
  Building2,
  Phone,
  X,
} from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Seed Quality Control and Certification",
    description:
      "Comprehensive capacity building on seed quality control measures and certification processes to ensure high standards in seed production and distribution.",
    fullDescription:
      "This intensive capacity building program covers all aspects of seed quality control, from laboratory testing to field inspections. Participants gain hands-on experience with quality control standards and certification procedures essential for maintaining seed integrity throughout the production chain. The training emphasizes practical applications of international best practices and quality assurance protocols aligned with ECOWAS and national standards. Ideal for seed producers, quality control officers, and agricultural extension workers seeking to enhance their expertise in seed certification systems.",
    date: "October 2021",
    time: "Full Day",
    duration: "5 Days",
    location: "African Seed Ltd, Lunsar",
    sponsor: "FAO Support",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-green-500 to-emerald-600",
    status: "Completed",
    instructor: "SLeSCA Expert Team",
    topics: [
      "Quality control standards",
      "Laboratory testing procedures",
      "Certification protocols",
      "Field inspection techniques",
      "Documentation requirements",
    ],
  },
  {
    id: 2,
    title: "Seed Certification and Seed Testing Workshop",
    description:
      "Intensive capacity building focused on seed certification standards and advanced testing methodologies for comprehensive seed quality assurance.",
    fullDescription:
      "This workshop provides participants with in-depth knowledge of seed certification systems and laboratory testing procedures. The training covers the complete seed certification workflow, from sample collection to final certification decisions. Participants engage in hands-on laboratory sessions learning to operate modern testing equipment, conduct germination tests, purity analysis, and moisture content determination. The program emphasizes standardized testing protocols, accurate record-keeping, and quality benchmarking against national and international standards. Perfect for laboratory technicians, seed inspectors, and quality assurance personnel.",
    date: "November 2022",
    time: "Full Day",
    duration: "1 Week",
    location: "Bo Inn, Bo District",
    sponsor: "FAO Support",
    icon: Award,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    color: "from-emerald-500 to-teal-600",
    status: "Completed",
    instructor: "SLeSCA Certification Team",
    topics: [
      "Seed testing methodologies",
      "Laboratory operations",
      "Certification standards",
      "Quality benchmarking",
      "Equipment handling",
    ],
  },
  {
    id: 3,
    title: "Seed Policy Engagement Workshop for NGOs",
    description:
      "Strategic workshop focused on seed policy engagement and strengthening seed systems, specifically designed for NGOs and development partners.",
    fullDescription:
      "This specialized workshop brings together NGOs, development organizations, and stakeholders to discuss and understand seed policy frameworks in Sierra Leone. The training covers seed system strengthening strategies, policy advocacy approaches, and collaborative frameworks for improving seed sector governance. Participants learn about regulatory environments, stakeholder engagement techniques, and effective strategies for policy influence. The workshop facilitates networking among development partners and provides platforms for sharing best practices in seed system development. Essential for NGO program managers, development practitioners, and policy advocates working in agricultural development.",
    date: "March 2023",
    time: "Full Day",
    duration: "3 Days",
    location: "MAFS, Freetown",
    sponsor: "SLeSCA (Organizer)",
    icon: Users,
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800",
    color: "from-teal-500 to-cyan-600",
    status: "Completed",
    instructor: "Policy & Advocacy Team",
    topics: [
      "Seed policy frameworks",
      "NGO engagement strategies",
      "Seed system strengthening",
      "Stakeholder collaboration",
      "Policy advocacy",
    ],
  },
  {
    id: 4,
    title: "Laboratory Technician Training - Seed Testing",
    description:
      "Specialized technical training for laboratory technicians focusing on advanced seed testing procedures and quality analysis methods.",
    fullDescription:
      "This comprehensive training program is designed specifically for laboratory technicians to enhance their technical competencies in seed testing. The curriculum covers advanced testing methodologies including germination tests, vigor testing, seed health analysis, and physical purity examinations. Participants receive hands-on training with modern laboratory equipment, learn to interpret test results accurately, and understand quality control measures for laboratory operations. The program emphasizes precision, attention to detail, and adherence to international testing standards (ISTA). Graduates are equipped to manage seed testing laboratories and conduct reliable quality assessments.",
    date: "June 2023",
    time: "Full Day",
    duration: "2 Weeks",
    location: "Mile 91, Tonkolili District",
    sponsor: "SLARiS",
    icon: Award,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    color: "from-cyan-500 to-blue-600",
    status: "Completed",
    instructor: "Senior Laboratory Specialists",
    topics: [
      "Advanced seed testing",
      "Laboratory equipment operation",
      "Quality control procedures",
      "Result interpretation",
      "ISTA standards",
    ],
  },
  {
    id: 5,
    title: "Lab & Field Inspector Training - Seed Field Inspections",
    description:
      "Comprehensive training combining laboratory and field inspection skills for effective seed quality monitoring and certification.",
    fullDescription:
      "This dual-focused training program prepares participants to perform both laboratory testing and field inspection duties. The field component covers crop inspection protocols, disease identification, field isolation requirements, and varietal purity assessment. The laboratory component includes sample processing, basic testing procedures, and quality documentation. Participants learn to conduct thorough field inspections during critical crop growth stages, identify off-types and contaminants, assess crop health, and make informed certification recommendations. The integrated approach ensures inspectors understand the complete quality assurance process from field to final seed product.",
    date: "July 2023",
    time: "Full Day",
    duration: "2 Weeks",
    location: "Lunsar, Port Loko District",
    sponsor: "SLARiS",
    icon: Users,
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    color: "from-purple-500 to-pink-600",
    status: "Completed",
    instructor: "Field & Lab Inspection Team",
    topics: [
      "Field inspection protocols",
      "Laboratory testing basics",
      "Disease identification",
      "Varietal purity assessment",
      "Documentation standards",
    ],
  },
  {
    id: 6,
    title: "Laws Governing Variety Release & Certification",
    description:
      "Legal and regulatory training for lab and field inspectors on variety release procedures and certification requirements under Sierra Leone seed laws.",
    fullDescription:
      "This training provides essential knowledge about the legal and regulatory framework governing seed variety release and certification in Sierra Leone. Participants learn about national seed laws, regulations, and procedures for variety evaluation, release, and registration. The program covers the roles and responsibilities of certification authorities, legal requirements for seed production and marketing, enforcement mechanisms, and compliance procedures. Special attention is given to understanding the variety release process, testing requirements, and documentation needed for official certification. Critical for inspectors and certification officers who need to understand the legal basis of their work.",
    date: "August 2023",
    time: "Full Day",
    duration: "1 Week",
    location: "G-Complex, Mile 91, Tonkolili District",
    sponsor: "SLARiS",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    color: "from-orange-500 to-amber-600",
    status: "Completed",
    instructor: "Legal & Regulatory Experts",
    topics: [
      "Seed legislation",
      "Variety release procedures",
      "Certification requirements",
      "Regulatory compliance",
      "Legal frameworks",
    ],
  },
  {
    id: 7,
    title: "Field Inspection Techniques Training",
    description:
      "Advanced training for field inspectors focusing on specialized inspection techniques, assessment methods, and quality monitoring protocols.",
    fullDescription:
      "This advanced program is tailored for experienced field inspectors seeking to refine their inspection skills and learn new techniques. The training covers systematic field assessment methods, advanced disease and pest identification, sophisticated sampling techniques, and precision measurement tools. Participants learn to conduct inspections at various crop growth stages, assess genetic purity using morphological markers, evaluate seed production practices, and compile detailed inspection reports. The program includes extensive field practicals where inspectors apply learned techniques in real production fields under expert supervision. Emphasis is placed on objectivity, accuracy, and professional conduct during inspections.",
    date: "September 2023",
    time: "Full Day",
    duration: "2 Weeks",
    location: "Mile 91, Tonkolili District",
    sponsor: "SLARiS",
    icon: Users,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-green-500 to-emerald-600",
    status: "Completed",
    instructor: "Senior Field Inspectors",
    topics: [
      "Advanced inspection techniques",
      "Disease identification",
      "Sampling methods",
      "Genetic purity assessment",
      "Professional reporting",
    ],
  },
  {
    id: 8,
    title: "Hands-on Seed Multiplication & Quality Control",
    description:
      "Practical capacity development program for seed actors focusing on multiplication techniques, quality control, and sustainable seed production management.",
    fullDescription:
      "This extensive multi-district training program provides comprehensive hands-on experience in seed multiplication and quality management. Participants engage in practical sessions covering foundation and certified seed production, proper agronomic practices, isolation distances, roguing techniques, and post-harvest handling. The program emphasizes sustainable seed production practices, business planning for seed enterprises, and market linkage strategies. Field demonstrations showcase best practices in seed production across different crops and agro-ecological zones. This collaborative training brings together seed producers, farmers, extension agents, and researchers to share knowledge and build a stronger seed sector. Includes follow-up support and mentoring for participants establishing seed production businesses.",
    date: "2023-2024",
    time: "Full Day",
    duration: "Multiple Sessions",
    location: "Multiple Districts across Sierra Leone",
    sponsor: "TAAT Rice Compact / SLARiS / SLARI / SLeSCA",
    icon: Users,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
    color: "from-emerald-500 to-teal-600",
    status: "Completed",
    instructor: "Multi-Agency Expert Team",
    topics: [
      "Seed multiplication techniques",
      "Quality control in production",
      "Business management",
      "Market linkages",
      "Sustainable practices",
    ],
  },
  {
    id: 9,
    title: "Advanced Microsoft Office Skills Training",
    description:
      "Professional development training for SLeSCA staff focusing on advanced Microsoft Office applications and digital productivity tools.",
    fullDescription:
      "This internal capacity building initiative enhances staff technical competencies in Microsoft Office suite applications. The training covers advanced features of Word for professional documentation, Excel for data analysis and reporting, PowerPoint for effective presentations, and Outlook for communication management. Participants learn to use templates, automation features, data visualization tools, and collaborative functions. The program includes practical exercises relevant to daily work tasks such as report writing, database management, and presentation design. Special focus is given to improving efficiency, accuracy, and professionalism in administrative and technical work. The training contributes to overall organizational effectiveness and service delivery quality.",
    date: "May-June 2024",
    time: "Office Hours",
    duration: "1 Month",
    location: "SLeSCA Headquarters, Freetown",
    sponsor: "SLeSCA (Internal Training)",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    color: "from-teal-500 to-cyan-600",
    status: "Completed",
    instructor: "IT Training Specialists",
    topics: [
      "Advanced Word processing",
      "Excel data analysis",
      "PowerPoint presentations",
      "Outlook management",
      "Digital productivity",
    ],
  },
  {
    id: 10,
    title: "Cassava Weed Management & Safe Pesticide Use",
    description:
      "Specialized training for field inspectors on cassava production, focusing on six-step weed management, safe pesticide practices, and improved agronomy.",
    fullDescription:
      "This practical training program addresses critical aspects of cassava production management with emphasis on sustainable weed control strategies. The six-step weed management approach covers pre-planting land preparation, early weed control, critical weed-free periods, integrated weed management techniques, and post-harvest field management. Participants receive comprehensive training on safe pesticide selection, application methods, personal protective equipment use, and environmental safety measures. The agronomy component covers optimal planting practices, spacing, fertilizer application, and pest management. Field demonstrations provide hands-on experience in implementing these practices. Essential for field inspectors working with cassava seed and ware production systems.",
    date: "June 2024",
    time: "Full Day",
    duration: "1 Week",
    location: "Bo Inn, Bo District",
    sponsor: "IITA (International Institute of Tropical Agriculture)",
    icon: Users,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-cyan-500 to-blue-600",
    status: "Completed",
    instructor: "IITA Agronomists",
    topics: [
      "Six-step weed management",
      "Safe pesticide practices",
      "Cassava agronomy",
      "Integrated pest management",
      "Environmental safety",
    ],
  },
  {
    id: 11,
    title: "Rice Field Inspection & Certification Training",
    description:
      "Comprehensive training on rice field inspection protocols and seed certification procedures specifically designed for rice production systems.",
    fullDescription:
      "This specialized training focuses on the unique requirements of rice seed certification and field inspection. Participants learn specific inspection protocols for rice at different growth stages, from vegetative to reproductive phases. The program covers identification of rice varieties, assessment of genetic purity, disease and pest recognition in rice, and evaluation of production practices affecting seed quality. Certification procedures specific to rice including foundation, certified, and truthfully labeled seed classes are thoroughly covered. Practical field sessions provide hands-on experience in conducting inspections, sampling, and making certification recommendations. The training aligns with national certification standards and prepares inspectors to effectively monitor rice seed production fields.",
    date: "February 2025",
    time: "Full Day",
    duration: "1 Week",
    location: "Moyamba District",
    sponsor: "Action Against Hunger (ACF)",
    icon: Award,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    color: "from-purple-500 to-pink-600",
    status: "Completed",
    instructor: "Rice Specialists & Certification Officers",
    topics: [
      "Rice field inspection protocols",
      "Variety identification",
      "Certification procedures",
      "Quality parameters",
      "Disease recognition",
    ],
  },
  {
    id: 12,
    title: "Seed Science & Technology Workshop",
    description:
      "Advanced workshop in partnership with Njala University focusing on seed science fundamentals, modern technology applications, and research-based training.",
    fullDescription:
      "This prestigious partnership program between SLeSCA and Njala University offers advanced training in seed science and technology for researchers, educators, and senior seed sector professionals. The curriculum covers fundamental seed biology, physiology of seed development and germination, genetic principles in seed production, and cutting-edge seed technologies. Participants engage with topics including seed enhancement technologies, molecular markers in seed quality assessment, climate-smart seed systems, and innovations in seed storage and processing. The workshop facilitates knowledge exchange between academia and industry, promotes research collaboration, and strengthens capacity for seed science education. Includes laboratory sessions, seminars, and opportunities for networking with leading seed scientists.",
    date: "June 2025",
    time: "Full Day",
    duration: "2 Weeks",
    location: "Njala University Campus",
    sponsor: "SLeSCA & Njala University Partnership",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    color: "from-orange-500 to-amber-600",
    status: "Upcoming",
    instructor: "University Faculty & SLeSCA Senior Staff",
    topics: [
      "Seed biology & physiology",
      "Modern seed technologies",
      "Genetic improvement",
      "Research methods",
      "Innovation in seed systems",
    ],
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Training",
    description:
      "Learn from industry-leading professionals with years of experience",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Target,
    title: "Hands-on Practice",
    description:
      "Practical sessions with real-world applications and demonstrations",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with fellow farmers and industry stakeholders",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive official certificates upon successful completion",
    color: "from-cyan-500 to-blue-600",
  },
];

const registrationSteps = [
  {
    step: "01",
    title: "Choose Workshop",
    icon: Calendar,
    description: "Browse and select your training",
  },
  {
    step: "02",
    title: "Fill Registration",
    icon: User,
    description: "Complete the registration form",
  },
  {
    step: "03",
    title: "Wait for Approval",
    icon: CreditCard,
    description: "Processing your application",
  },
  {
    step: "04",
    title: "Get Confirmation",
    icon: Mail,
    description: "Receive email confirmation",
  },
];

const testimonials = [
  {
    name: "Ibrahim Koroma",
    role: "Seed Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    rating: 5,
    text: "The training completely transformed how I manage my seed production. Highly recommended!",
  },
  {
    name: "Mariama Conteh",
    role: "Farmer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    rating: 5,
    text: "Excellent instructors and practical knowledge that I could apply immediately to my farm.",
  },
  {
    name: "Mohamed Bangura",
    role: "Seed Vendor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    rating: 5,
    text: "The certification training helped me understand quality standards and grow my business.",
  },
];

const TrainingAndWorkshopsComponent = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    workshop: "",
  });
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({ ...prev, [name]: value }));
    if (registrationErrors[name]) {
      setRegistrationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateRegistration = () => {
    const errors = {};
    if (!registrationData.fullName.trim()) errors.fullName = "Name is required";
    if (!registrationData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(registrationData.email))
      errors.email = "Email is invalid";
    if (!registrationData.phone.trim()) errors.phone = "Phone is required";
    if (!registrationData.workshop)
      errors.workshop = "Please select a workshop";
    return errors;
  };

  const handleRegistrationSubmit = () => {
    const errors = validateRegistration();
    if (Object.keys(errors).length === 0) {
      alert("Registration submitted successfully! We'll contact you shortly.");
      setShowRegistrationModal(false);
      setRegistrationData({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        workshop: "",
      });
    } else {
      setRegistrationErrors(errors);
    }
  };

  const openRegistration = (workshop) => {
    setRegistrationData((prev) => ({ ...prev, workshop: workshop.title }));
    setShowRegistrationModal(true);
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
        {/* <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Learn & Grow
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
              Training & Workshops
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive training programs and workshops designed
            to empower farmers and stakeholders with essential skills and
            knowledge in seed production and certification.
          </p>
        </div> */}

        {/* Stats Banner */}
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

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, value: "12+", label: "Workshops Conducted" },
              { icon: Users, value: "1000+", label: "Participants Trained" },
              { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
              { icon: Award, value: "8+", label: "Partner Organizations" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 transform group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              className="group bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${workshop.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                ></div>

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    workshop.status === "Completed"
                      ? "bg-gray-500 text-white"
                      : workshop.status === "Upcoming"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {workshop.status}
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <workshop.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {workshop.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {workshop.description}
                </p>

                {/* Info Grid */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    <span className="truncate">{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    <span className="truncate">{workshop.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    <span className="truncate">{workshop.location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 font-bold py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    <span className="text-sm">Details</span>
                  </button>
                  {workshop.status !== "Completed" && (
                    <button
                      onClick={() => openRegistration(workshop)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-sm">Register</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Attend Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Attend Our Workshops?
            </h3>
            <p className="text-gray-600 text-lg">
              Discover the benefits of joining our training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-2xl mb-4 transform hover:scale-110 hover:rotate-3 transition-all duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              How to Register
            </h3>
            <p className="text-gray-600 text-lg">
              Simple steps to join our training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((item, idx) => (
              <div key={idx} className="relative">
                {idx < registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 -translate-x-1/2 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-extrabold text-green-100">
                      {item.step}
                    </span>
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What Participants Say
            </h3>
            <p className="text-gray-600 text-lg">
              Real feedback from our training alumni
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Join Our Training Programs Today!
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Empower yourself with the knowledge and skills needed to thrive in
            the agricultural industry. Sign up for upcoming workshops now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowRegistrationModal(true)}
              className="flex items-center justify-center space-x-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Register Now</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowCalendar(true)}
              className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>View Calendar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowCalendar(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 relative overflow-hidden">
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

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">
                    Training Calendar
                  </h3>
                  <p className="text-white/90">
                    Overview of all SLeSCA training programs and workshops
                  </p>
                </div>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {workshops.map((workshop, idx) => (
                  <div
                    key={workshop.id}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-green-300 transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 bg-gradient-to-br ${workshop.color} rounded-xl flex-shrink-0`}
                          >
                            <workshop.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {workshop.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3">
                              {workshop.description}
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              <div className="flex items-center space-x-2 text-sm">
                                <Calendar className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">
                                  <strong>Date:</strong> {workshop.date}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <Clock className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">
                                  <strong>Duration:</strong> {workshop.duration}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 text-sm">
                                <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700 truncate">
                                  {workshop.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end space-y-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              workshop.status === "Completed"
                                ? "bg-gray-200 text-gray-700"
                                : workshop.status === "Upcoming"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {workshop.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setShowCalendar(false);
                            setSelectedWorkshop(workshop);
                          }}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 font-bold py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300"
                        >
                          <span className="text-sm">View Details</span>
                        </button>
                        {workshop.status !== "Completed" && (
                          <button
                            onClick={() => {
                              setShowCalendar(false);
                              openRegistration(workshop);
                            }}
                            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl hover:shadow-lg transition-all duration-300"
                          >
                            <span className="text-sm">Register</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedWorkshop(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`bg-gradient-to-r ${selectedWorkshop.color} p-8 relative overflow-hidden`}
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

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">
                    {selectedWorkshop.title}
                  </h3>
                  <p className="text-white/90">
                    Instructor: {selectedWorkshop.instructor}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <img
                src={selectedWorkshop.image}
                alt={selectedWorkshop.title}
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Date</div>
                      <div className="font-bold text-gray-900">
                        {selectedWorkshop.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Time</div>
                      <div className="font-bold text-gray-900">
                        {selectedWorkshop.time}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-bold text-gray-900">
                        {selectedWorkshop.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-bold text-gray-900">
                        {selectedWorkshop.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">
                      Sponsor / Partner
                    </div>
                    <div className="font-bold text-gray-900">
                      {selectedWorkshop.sponsor}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Description
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedWorkshop.fullDescription}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Topics Covered
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedWorkshop.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-green-50 rounded-lg p-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedWorkshop.status !== "Completed" && (
                <button
                  onClick={() => {
                    setSelectedWorkshop(null);
                    openRegistration(selectedWorkshop);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Register for this Workshop</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowRegistrationModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 relative overflow-hidden">
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

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">
                    Workshop Registration
                  </h3>
                  <p className="text-white/90">
                    Fill out the form below to register for training
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowRegistrationModal(false);
                    setRegistrationErrors({});
                  }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={registrationData.fullName}
                      onChange={handleRegistrationChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                        registrationErrors.fullName
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {registrationErrors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {registrationErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={registrationData.email}
                      onChange={handleRegistrationChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                        registrationErrors.email
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {registrationErrors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {registrationErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleRegistrationChange}
                      placeholder="+232 XX XXX XXXX"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                        registrationErrors.phone
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                  {registrationErrors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {registrationErrors.phone}
                    </p>
                  )}
                </div>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Organization / Company{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="organization"
                      value={registrationData.organization}
                      onChange={handleRegistrationChange}
                      placeholder="Your organization name"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    />
                  </div>
                </div>

                {/* Workshop Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Select Workshop <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                    </div>
                    <select
                      name="workshop"
                      value={registrationData.workshop}
                      onChange={handleRegistrationChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none bg-white ${
                        registrationErrors.workshop
                          ? "border-red-500"
                          : "border-gray-200"
                      }`}
                    >
                      <option value="">Choose a workshop...</option>
                      {workshops
                        .filter((w) => w.status !== "Completed")
                        .map((workshop) => (
                          <option key={workshop.id} value={workshop.title}>
                            {workshop.title} - {workshop.date}
                          </option>
                        ))}
                    </select>
                  </div>
                  {registrationErrors.workshop && (
                    <p className="mt-1 text-sm text-red-500">
                      {registrationErrors.workshop}
                    </p>
                  )}
                </div>

                {/* Selected Workshop Preview */}
                {registrationData.workshop && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-gray-900 mb-1">
                          Selected Workshop:
                        </p>
                        <p className="text-sm text-gray-700">
                          {registrationData.workshop}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setShowRegistrationModal(false);
                      setRegistrationErrors({});
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRegistrationSubmit}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Submit Registration</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> After submitting your registration,
                    you will receive a confirmation email with further details
                    about the workshop, including payment information and venue
                    directions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingAndWorkshopsComponent;

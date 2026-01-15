// import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../asset/Coat_of_arms.png";
import AOS from "../components/aosConfig";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   {
//     name: "About Us",
//     href: "/about",
//     current: false,
//     subLinks: [
//       { name: "Our Team", href: "/team" },
//       { name: "SLeSCA Structure", href: "/about/structure" },
//     ],
//   },
//   {
//     name: "Services",
//     href: "/services",
//     current: false,
//     subLinks: [
//       {
//         name: "Seed Quality Certification",
//         href: "/services/quality-certification",
//       },
//     ],
//   },
//   { name: "Projects", href: "/recent-projects", current: false },
//   {
//     name: "Training and Workshops",
//     href: "/services/training-workshops",
//     current: false,
//     subLinks: [
//       {
//         name: "Farmer Training and Capacity Building",
//         href: "/farmer-training",
//       },
//       { name: "Advocacy and Collaboration", href: "/advocacy-collaboration" },
//     ],
//   },
//   {
//     name: "Documents",
//     href: "/document",
//     current: false,
//     subLinks: [
//       { name: "Seeds Act", href: "/document/seeds-act" },
//       { name: "Policies", href: "/document/policies" },
//       { name: "National Seed Catalogue", href: "/document/policies" },
//     ],
//   },
//   { name: "Public Notices", href: "/public-notices", current: false },
//   { name: "Legal", href: "/legal", current: false },
//   { name: "Contact Us", href: "/contact-us", current: false },
// ];

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const [activeNav, setActiveNav] = useState("/");

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleNavClick = (href) => {
//     localStorage.setItem("currentNav", href);
//     setActiveNav(href);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const savedNav = localStorage.getItem("currentNav");
//     const currentPath = location.pathname;
//     setActiveNav(savedNav && savedNav === currentPath ? savedNav : currentPath);
//     AOS.refresh();
//   }, [location]);

//   const renderSubLinks = (subLinks) => (
//     <div className="ml-4 space-y-1">
//       {subLinks.map((subItem) => (
//         <NavLink
//           key={subItem.name}
//           exact
//           to={subItem.href}
//           className={`
//             block px-3 py-2 text-sm text-white
//             hover:underline hover:decoration-green-500
//             transition duration-150 ease-in-out font-Poppins font-semibold
//           `}
//           onClick={() => handleNavClick(subItem.href)}
//         >
//           {subItem.name}
//         </NavLink>
//       ))}
//     </div>
//   );

//   return (
//     <nav
//       className="bg-green-950 shadow top-0 w-full max-w-[150rem] fixed z-50"
//       aria-label="Top"
//     >
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
//         <div className="flex w-[90%] justify-between items-center h-16">
//           <div className="flex items-center lg:ml-20 justify-start">
//             <NavLink
//               to="/"
//               className="text-xl flex flex-row justify-center items-center font-bold font-Poppins text-white"
//             >
//               <img
//                 className="block h-8 w-auto lg:hidden"
//                 src={logo}
//                 alt="SLeSCA"
//               />
//               <img
//                 className="hidden h-8 w-auto lg:block"
//                 src={logo}
//                 alt="SLeSCA"
//               />
//               <p className="text-pretty md:ml-2 md:mt-2">SLeSCA</p>
//             </NavLink>
//           </div>

//           <div className="flex items-center -mr-2 lg:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-white
//               hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out
//               font-Poppins font-bold"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={
//                     isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="w-full hidden lg:flex lg:items-center justify-center ">
//             <div className="hidden lg:flex lg:items-center justify-center lg:ml-6 ">
//               {navigation.map((item) => (
//                 <div key={item.name} className="relative group">
//                   <NavLink
//                     exact
//                     to={item.href}
//                     className={`
//                     px-3 py-2 text-sm text-white
//                     hover:underline hover:decoration-green-500 hover:decoration-2
//                     transition duration-150 ease-in-out font-Poppins font-semibold
//                     ${
//                       activeNav === item.href
//                         ? "underline decoration-green-500 decoration-2"
//                         : ""
//                     }
//                   `}
//                     onClick={() => handleNavClick(item.href)}
//                   >
//                     {item.name}
//                   </NavLink>
//                   {item.subLinks && (
//                     <div className="absolute hidden group-hover:block bg-gray-800 shadow-lg p-2 mt-2 rounded">
//                       {renderSubLinks(item.subLinks)}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <Link
//                 to="/about/license-procedures"
//                 className="text-white text-sm font-bold bg-yellow-500 hover:bg-yellow-400 px-3 py-1 rounded ml-[5rem]"
//               >
//                 Get License
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="lg:hidden">
//           <div className="pt-2 pb-3 flex flex-col justify-center items-center">
//             {navigation.map((item) => (
//               <div key={item.name}>
//                 <NavLink
//                   exact
//                   to={item.href}
//                   className={`
//                     block px-3 py-2 text-sm text-white
//                     hover:underline hover:decoration-blue-500
//                     transition duration-150 ease-in-out font-Poppins font-semibold
//                     ${
//                       activeNav === item.href
//                         ? "underline decoration-blue-500 decoration-2"
//                         : ""
//                     }
//                   `}
//                   onClick={() => handleNavClick(item.href)}
//                 >
//                   {item.name}
//                 </NavLink>
//                 {item.subLinks && renderSubLinks(item.subLinks)}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;

import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Award } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "About Us",
    href: "/about",
    current: false,
    subLinks: [
      { name: "Our Team", href: "/team" },
      { name: "SLeSCA Structure", href: "/about/structure" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    current: false,
    subLinks: [
      {
        name: "Seed Quality Certification",
        href: "/services/quality-certification",
      },
      {
        name: "Licenses Renewal",
        href: "/services/renewal-license",
      },
    ],
  },
  { name: "Projects", href: "/recent-projects", current: false },
  {
    name: "Training and Workshops",
    href: "/services/training-workshops",
    current: false,
    subLinks: [
      {
        name: "Farmer Training and Capacity Building",
        href: "/farmer-training",
      },
      { name: "Advocacy and Collaboration", href: "/advocacy-collaboration" },
    ],
  },
  {
    name: "Documents",
    href: "/document",
    current: false,
    subLinks: [
      { name: "Seeds Act", href: "/document/seeds-act" },
      { name: "Policies", href: "/document/policies" },
      // { name: "National Seed Catalogue", href: "/document/catalogue" },
    ],
  },
  { name: "Public Notices", href: "/public-notices", current: false },
  { name: "Legal", href: "/legal", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("/");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (itemName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  const handleNavClick = (href) => {
    localStorage.setItem("currentNav", href);
    setActiveNav(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedNav = localStorage.getItem("currentNav");
    const currentPath = location.pathname;
    setActiveNav(savedNav && savedNav === currentPath ? savedNav : currentPath);
    AOS.refresh();
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Desktop submenu component
  const DesktopSubmenu = ({ subLinks }) => (
    <div
      className="absolute left-1 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2 z-50 pointer-events-none
    group-hover:pointer-events-auto"
    >
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100">
        <div className="py-2">
          {subLinks.map((subItem, idx) => (
            <a
              key={subItem.name}
              href={subItem.href}
              className={`
                block px-4 py-3 text-sm font-medium transition-all duration-300
                ${
                  activeNav === subItem.href
                    ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-l-4 hover:border-green-400"
                }
                ${idx !== subLinks.length - 1 ? "border-b border-gray-100" : ""}
              `}
              onClick={(e) => handleNavClick(subItem.href, false, e)}
            >
              <div className="flex items-center">
                <span className="ml-2">{subItem.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile submenu component
  const MobileSubmenu = ({ subLinks, isOpen }) => (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pl-4 py-2 bg-green-900 rounded-lg mt-2 space-y-1">
        {subLinks.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className={`
              block px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${
                activeNav === subItem.href
                  ? "bg-green-700 text-white"
                  : "text-green-100 hover:bg-green-800 hover:text-white"
              }
            `}
            onClick={(e) => handleNavClick(subItem.href, false, e)}
          >
            • {subItem.name}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-green-950 shadow-lg" : "bg-green-950"
        }`}
        aria-label="Main navigation"
      >
        <div className="w-full px-6 sm:px-6 lg:px-6">
          <div className="flex justify-around items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-5 flex-shrink-0">
              <a
                href="/"
                className="flex items-center space-x-2 group"
                onClick={(e) => handleNavClick("/", false, e)}
              >
                <img
                  src={logo}
                  alt="SLeSCA Logo"
                  className="h-10 w-8 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-base lg:text-lg tracking-tight whitespace-nowrap">
                    SLeSCA
                  </span>
                  <span className="text-green-300 text-xs hidden lg:block whitespace-nowrap">
                    Seed Certification
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden 2xl:flex items-center justify-center flex-1 px-12">
              <div className="flex items-center space-x-2 xl:space-x-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className={`
                        px-3 xl:px-4 py-2 text-sm font-normal rounded-lg
                        transition-all duration-300 flex items-center space-x-1 cursor-pointer whitespace-nowrap
                        ${
                          activeNav === item.href
                            ? "text-white bg-green-800"
                            : "text-green-100 hover:text-white hover:bg-green-800"
                        }
                      `}
                      onClick={(e) =>
                        handleNavClick(item.href, !!item.subLinks, e)
                      }
                    >
                      <span>{item.name}</span>
                      {item.subLinks && (
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </a>
                    {item.subLinks && (
                      <DesktopSubmenu subLinks={item.subLinks} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Get License Button - Desktop */}
            <div className="hidden 2xl:flex items-center space-x-4 flex-shrink-0">
              <a
                href="/license-procedures"
                className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                onClick={(e) =>
                  handleNavClick("/about/license-procedures", false, e)
                }
              >
                <Award size={18} />
                <span>Get License</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              type="button"
              className="2xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-green-100 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`2xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-green-900 shadow-inner max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className={`
                      flex-1 px-4 py-3 text-base font-medium rounded-lg cursor-pointer
                      transition-all duration-200
                      ${
                        activeNav === item.href
                          ? "text-white bg-green-700"
                          : "text-green-100 hover:text-white hover:bg-green-800"
                      }
                    `}
                    onClick={(e) => {
                      if (item.subLinks) {
                        toggleSubmenu(item.name, e);
                      } else {
                        handleNavClick(item.href, false, e);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  {item.subLinks && (
                    <button
                      onClick={(e) => toggleSubmenu(item.name, e)}
                      className="p-2 text-green-100 hover:text-white transition-colors"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          openSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.subLinks && (
                  <MobileSubmenu
                    subLinks={item.subLinks}
                    isOpen={openSubmenu === item.name}
                  />
                )}
              </div>
            ))}

            {/* Get License Button - Mobile */}
            <a
              href="/about/license-procedures"
              className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-5 py-3 rounded-lg shadow-lg mt-4 transition-all duration-300 cursor-pointer"
              onClick={(e) =>
                handleNavClick("/about/license-procedures", false, e)
              }
            >
              <Award size={18} />
              <span>Get License</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

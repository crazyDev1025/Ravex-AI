import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../assets/logo.png";
import Button from "../../compenents/buttons/Button";

const docsLinks = [
  {
    name: "Integration Docs",
    href: "https://magmar-toolkit.gitbook.io/sdk-integration",
  },
  {
    name: "Whitepaper",
    href: "https://magmar-1.gitbook.io/magmar",
  },
  {
    name: "Company Formation Docs",
    href: "https://drive.google.com/file/d/11V-FcuZPSA3XjGPL93U0t_qiu7F-9VT4/view?usp=sharing",
  },
  {
    name: "Pitchdeck",
    href: "https://drive.google.com/file/d/1D4UgW9lHsVq1xDdWyU28RrSJwqhJpFhd/view?usp=sharing",
  },
  { name: "Terms of service", href: "/terms-of-service" },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const resourcesLinks = [
  {
    name: "Doc",
    href: "https://docs.ravexai.org",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  {
    name: "Glossary",
    href: "/glossary",
  },
  {
    name: "Doc",
    href: "https://docs.ravexai.org",
  },
];

const DocsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    </div>
  );
};

const ResourcesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative hover:text-white transition-colors duration-300 flex items-center gap-1 z-[]">
        Resources
        <IoIosArrowDown className="text-lg transition-transform duration-300 group-hover:rotate-180" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] bg-black/90 backdrop-blur-md rounded-lg py-2 shadow-lg border border-white/10">
          {resourcesLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm transition-colors text-white/80 hover:text-white hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const LinkedInDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="mt-1 text-white transition-colors duration-300 transform hover:text-white hover:scale-110">
        <FaLinkedinIn className="text-[22px]" />
      </button>
    </div>
  );
};

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showResources, setShowResources] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleChart = () => {
    toast.success("COMING SOON !!!");
  };

  return (
    <div className="relative">
      <div
        className={`fixed w-full z-[100000] transition-all duration-500 ${
          isScrolled ? "" : "bg-transparent"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "max-w-[1100px] md:mx-auto mx-5 rounded-full mt-4 bg-black/90 backdrop-blur-md border border-white/10"
              : "md:max-w-[1440px] md:mx-auto border border-transparent md:bg-transparent bg-black mx-5 md:mt-0 mt-5 md:rounded-none rounded-full "
          }`}
        >
          <div
            className={`flex justify-between items-center transition-all duration-500 ${
              isScrolled ? "py-3 px-8" : "md:py-6 py-2 px-[5%]"
            }`}
          >
            <Link to="/" className="flex items-center">
              <img
                className={`transition-all duration-500 ${
                  isScrolled ? "w-fit h-10" : "w-fit h-12"
                } object-contain`}
                src={logo}
                alt="RAVEX logo"
              />
              <h4
                className={`font-bold text-[#fd1d1d] transition-all duration-500 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                RAVEX
              </h4>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm text-white/80">
                <li className="group">
                  <a
                    href="/"
                    className="relative transition-colors duration-300 hover:text-white"
                  >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#demo"
                    className="relative transition-colors duration-300 hover:text-white"
                  >
                    Demo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#features"
                    className="relative transition-colors duration-300 hover:text-white"
                  >
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="group">
                  <DocsDropdown />
                </li>

                <li className="group">
                  <ResourcesDropdown />
                </li>
              </ul>
            </nav>

            <div className="items-center hidden gap-6 md:flex">
              <div className="flex items-center gap-4">
                <LinkedInDropdown />
                <a
                  href="https://github.com/RAVEX-toolkit/magmar-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FiGithub className="text-xl" />
                </a>
                <a
                  href="https://x.com/Ravex_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FaXTwitter className="text-xl" />
                </a>
                <a
                  href="https://t.me/Ravex_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
                >
                  <FaTelegramPlane className="text-xl" />
                </a>
              </div>
              <a
                href="https://app.ravexai.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Build with us"
                  className="transition-transform duration-300 transform rounded-full hover:scale-105"
                  variant="secondary"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setToggle(!toggle)}
              className="md:hidden text-[30px] text-white hover:text-gray-300 transition-colors"
            >
              {toggle ? <IoClose /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          toggle ? "flex flex-col" : "hidden"
        } py-6 bg-black/90 backdrop-blur-md fixed top-24 right-0 mx-4 my-2 min-w-[250px] rounded-[20px] sidebar z-[100]`}
      >
        <ul className="flex flex-col items-start justify-end flex-1 gap-6 px-6 text-white list-none">
          <li className="w-full transition-colors hover:text-white">
            <a href="/" className="block w-full">
              Home
            </a>
          </li>
          <li className="w-full transition-colors hover:text-white">
            <a href="#demo" className="block w-full">
              Demo
            </a>
          </li>
          <li className="w-full transition-colors hover:text-white">
            <a href="#features" className="block w-full">
              Features
            </a>
          </li>

          <li className="w-full">
            <button
              onClick={() => setShowResources(!showResources)}
              className="flex items-center justify-between w-full transition-colors hover:text-white"
            >
              <span className="flex items-center gap-2">
                Resources <IoIosArrowDown className="text-lg" />
              </span>
            </button>
            {showResources && (
              <div className="flex flex-col w-full gap-3 pl-4 mt-3 border-l border-white/20">
                {resourcesLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </li>

          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com/RAVEX-toolkit/magmar-examples"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 transform hover:text-white hover:scale-110"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href="https://x.com/Ravex_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a
              href="https://t.me/Ravex_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
          </div>
          <div className="w-full mt-4">
            <a
              href="https://app.ravexai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                text="Build with us"
                className="w-full transition-transform duration-300 transform rounded-full hover:scale-105"
                variant="secondary"
              />
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

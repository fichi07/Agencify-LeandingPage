import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const expertiseItems = [
    {
      icon: "/icon/magento.png",
      title: "Magento",
      description: "Le CMS incontournable",
    },
    {
      icon: "/icon/WordPress.png",
      title: "Wordpress",
      description: "Le CMS le plus connu",
    },
    {
      icon: "/icon/laravel.png",
      title: "Laravel",
      description: "Le Framework compétant",
    },
    {
      icon: "/icon/woocommerce.png",
      title: "Woo Commerce",
      description: "Création de commerce",
    },
  ];

  const servicesItems = [
    {
      icon: "/icon/approuve .png",
      title: "Optimisation",
      description: "Web",
    },
    {
      icon: "/icon/couches .png",
      title: "Design graphiques",
      description: "Web & print",
    },
    {
      icon: "/icon/360.png",
      title: "Développement web",
      description: "Desktop & Mobile",
    },
    {
      icon: "/icon/compte.png",
      title: "Suivi & support",
      description: "Dans votre projet",
    },
  ];

  return (
    <header>
      <nav className="flex flex-row max-w-full mx-auto justify-between items-center bg-white/30 backdrop-blur-lg lg:px-10 px-5 py-6 gap-10 shadow-lg">
        <img
          src="/images/agencifylogo.png"
          alt="Agencify"
          className="h-[30px]"
        />
        <button
          className="md:hidden block text-pink-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="flex-row gap-7 lg:flex hidden justify-center">
          <li>
            <a
              href="#accueil"
              className="text-base font-semibold hover:text-pink-500"
            >
              Accueil
            </a>
          </li>
          <li className="relative">
            <button
              className="flex flex-row items-center gap-1 text-base font-semibold hover:text-pink-500"
              onClick={() => setExpertiseOpen(true)}
            >
              Notre expertise
              <ChevronDown className="w-4 h-4" />
            </button>
            {expertiseOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-64"
                onMouseLeave={() => setExpertiseOpen(false)}
              >
                {expertiseItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.title.toLowerCase()}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>
          <li className="relative">
            <button
              className="flex flex-row items-center gap-1 text-base font-semibold hover:text-pink-500"
              onClick={() => setServicesOpen(true)}
            >
              NOS SERVICES
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 py-2 w-64"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.title.toLowerCase()}`}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>
          <li>
            <a
              href="#a-propos"
              className="text-base font-semibold hover:text-pink-500"
            >
              A Propos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-base font-semibold hover:text-pink-500"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="#demander-un-devis"
            className="bg-pink-500 text-white px-10 py-2 rounded-full font-semibold hover:bg-pink-600 transition duration-300 flex items-center gap-3"
          >
            <img src="/images/icon-btn.png" alt="" className="h-[30px]" />
            Demander un devis
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto py-1">
          <div className="flex justify-between items-center p-5 border-b">
            <img
              src="/images/agencifylogo.png"
              alt="Agencify"
              className="h-[30px]"
            />
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <ul className="p-5 space-y-4">
            <li>
              <a
                href="#accueil"
                className="text-xl font-semibold text-pink-500"
              >
                Accueil
              </a>
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full text-xl font-semibold"
                onClick={() => setExpertiseOpen(!expertiseOpen)}
              >
                Notre expertise
                <ChevronRight
                  className={`w-6 h-6 transition-transform ${
                    expertiseOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expertiseOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {expertiseItems.map((item, index) => (
                    <li className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6"
                      />
                      <div className="flex flex-col">
                        <p className="text-base">{item.title}</p>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full text-xl font-semibold"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Nos services
                <ChevronRight
                  className={`w-6 h-6 transition-transform ${
                    servicesOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {servicesItems.map((item, index) => (
                    <li className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6"
                      />
                      <div className="flex flex-col">
                        <p className="text-base">{item.title}</p>
                        <p className="text-xs">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#a-propos" className="text-xl font-semibold">
                A propos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-xl font-semibold">
                Contact
              </a>
            </li>
          </ul>
          <div className="p-5">
            <a
              href="#demander-un-devis"
              className="block w-full bg-pink-500 text-white text-center py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;

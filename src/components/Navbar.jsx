import React, { useEffect, useState } from "react";
import logo from "../logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tungkol sa Amin", href: "#about" },
    { name: "Mga Lingkod", href: "#servers" },
    { name: "Mga Programa", href: "#programs" },
    { name: "Sumapi sa Amin", href: "#join" },
  ];

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`fixed left-0 top-0 z-50 w-full border-b
          border-[#D4AF37]/25 transition-all duration-300 ${scrolled
            ? "bg-[#510708]/95 shadow-xl backdrop-blur-md"
            : "bg-[#510708]"
          }`}
      >
        <div className="mx-auto w-full max-w-[1500px] px-3 sm:px-6 lg:px-8 2xl:px-4">
          <div
            className={`relative flex items-center transition-all
              duration-300 ${scrolled ? "h-16" : "h-[72px]"}`}
          >
            {/* Logo and brand — left */}
            <a
              href="#home"
              className="flex min-w-0 items-center gap-1.5 sm:gap-2"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center
                  justify-center sm:h-14 sm:w-14"
              >
                <img
                  src={logo}
                  alt="Ministry of Altar Servers Official Logo"
                  className="h-full w-full scale-110 object-contain
                    drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <span
                  className="block truncate font-serif text-[10px]
                    font-bold tracking-[0.04em] text-[#E6C84A]
                    min-[380px]:text-[11px] sm:text-sm xl:text-base"
                >
                  Ministry of Altar Servers
                </span>

                <span
                  className="mt-0.5 block truncate text-[6px]
                    font-semibold uppercase tracking-[0.1em] text-red-200
                    min-[380px]:text-[7px] sm:text-[8px] xl:text-[9px]"
                >
                  Sto. Niño Parish · Bustos, Bulacan
                </span>
              </div>
            </a>

            {/* Desktop navigation — exact center */}
            <div
              className="absolute left-1/2 hidden -translate-x-1/2
                items-center justify-center gap-5 xl:flex 2xl:gap-7"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap border-b-2
                    border-transparent pb-1 text-center font-serif
                    text-[10px] font-bold uppercase tracking-[0.08em]
                    text-[#E6C84A] transition-all duration-200
                    hover:border-[#E6C84A] hover:text-yellow-200
                    2xl:text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Facebook — right */}
            <div
              className="ml-auto hidden items-center
    xl:mr-24 xl:flex 2xl:mr-40"
            >
              <a
                href="https://www.facebook.com/sakristangbustosenyo"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="flex h-9 w-9 items-center justify-center
                  rounded-full border border-[#D4AF37]/30
                  text-stone-200 transition-all duration-200
                  hover:border-[#E6C84A] hover:bg-white/10
                  hover:text-[#E6C84A]"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>

            {/* Mobile and tablet menu button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[70] ml-auto rounded-md p-2
                text-[#E6C84A] transition-colors hover:bg-white/10
                xl:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dark overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 xl:hidden ${isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }`}
      />

      {/* Mobile and tablet menu */}
      <div
        className={`fixed right-0 top-0 z-[60] h-[100dvh] w-[86%]
          max-w-xs border-l border-[#D4AF37]/25 bg-[#510708]
          shadow-2xl transition-transform duration-300 xl:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col px-6 pb-7 pt-24">
          {/* Mobile navigation */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#D4AF37]/20 py-4
                  text-center font-serif text-sm font-bold uppercase
                  tracking-[0.1em] text-[#E6C84A] transition-all
                  duration-200 hover:bg-white/5 hover:text-yellow-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile contact information */}
          <div className="mt-auto border-t border-[#D4AF37]/25 pt-6">
            <div className="mb-5 flex justify-center">
              <a
                href="https://www.facebook.com/sakristangbustosenyo"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="flex h-10 w-10 items-center justify-center
                  rounded-full border border-[#D4AF37]/30
                  text-stone-200 transition-colors
                  hover:text-[#E6C84A]"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>

            <div className="text-center">
              <p
                className="font-serif text-[9px] font-bold uppercase
                  tracking-[0.12em] text-[#E6C84A]"
              >
                Ministry of Altar Servers
              </p>

              <p
                className="mt-1 text-[8px] font-semibold uppercase
                  tracking-[0.1em] text-red-200/80"
              >
                Sto. Niño Parish · Bustos, Bulacan
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useCallback, useEffect, useState } from "react";
import logo from "../logo.png";
import developerPhoto from "../FormalJRP.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);

  const externalLinks = [
    {
      name: "Diocese of Malolos",
      href: "https://www.facebook.com/CathedralMalolos",
    },
    {
      name: "Vicariate of St. Augustine (Ang Batingaw Online)",
      href: "https://www.facebook.com/AngBatingawOnline",
    },
    {
      name: "Sto. Niño Parish - Bustos (Official)",
      href: "https://www.facebook.com/SNPBustos",
    },
  ];

  const ministryService = [
    {
      years: "2019",
      role: "Pormal na Pagkabilang",
      description:
        "Pormal na na-induct bilang kasapi ng Ministry of Altar Servers.",
    },
    {
      years: "2019–2021",
      role: "Barangay Coordinator",
      description:
        "Nagsilbing coordinator ng mga altar server mula sa kanyang bisita.",
    },
    {
      years: "2021–2023",
      role: "Secretary",
      description:
        "Tumulong sa pangangasiwa ng mga tala, komunikasyon, at gawain ng ministri.",
    },
    {
      years: "2023–Kasalukuyan",
      role: "Vice President",
      description:
        "Patuloy na tumutulong sa pamumuno at mga programa ng organisasyon.",
    },
  ];

  const closeDeveloper = useCallback(() => {
    setIsDeveloperOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDeveloper();
      }
    };

    if (isDeveloperOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDeveloperOpen, closeDeveloper]);

  return (
    <>
      <footer
        className="relative overflow-hidden border-t border-red-900/60
          bg-red-950 pb-8 pt-16 text-red-200"
      >
        {/* Glow highlight */}
        <div
          className="pointer-events-none absolute bottom-0 right-0
            h-80 w-80 rounded-full bg-red-900/5 blur-3xl"
        />

        <div
          className="relative z-10 mx-auto max-w-6xl
            px-4 sm:px-6 lg:px-8"
        >
          <div
            className="mb-12 grid grid-cols-1 gap-10
              md:grid-cols-3"
          >
            {/* Brand column */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div
                  className="relative flex h-14 w-14 shrink-0
                    items-center justify-center"
                >
                  <img
                    src={logo}
                    alt="Ministry of Altar Servers Official Logo"
                    className="h-full w-full scale-125 object-contain
                      drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]"
                  />
                </div>

                <div className="min-w-0 leading-tight">
                  <span
                    className="block font-serif
                      text-sm font-bold tracking-[0.04em]
                      text-[#E6C84A] sm:text-base"
                  >
                    Ministry of Altar Servers
                  </span>

                  <span
                    className="mt-1 block text-[8px]
                      font-semibold uppercase tracking-[0.1em]
                      text-red-300 sm:text-[9px]"
                  >
                    Sto. Niño Parish · Bustos, Bulacan
                  </span>
                </div>
              </div>

              <p
                className="text-justify text-xs leading-relaxed
                  text-red-100/70"
              >
                Ang Ministry of Altar Servers ng Sto. Niño Parish sa
                Bustos, Bulacan, ay nakatuon sa paggabay sa mga kabataan
                tungo sa banal na paglilingkod sa dambana at
                kagandahang-asal sa loob at labas ng Simbahan.
              </p>
            </div>

            {/* External links */}
            <div className="text-left">
              <h4
                className="mb-4 font-serif text-sm font-bold uppercase
                  tracking-widest text-[#E6C84A]"
              >
                Mga Panlabas na Link
              </h4>

              <ul className="space-y-2 text-xs">
                {externalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block py-1 text-red-200 transition-all
                        duration-200 hover:text-white hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact information */}
            <div className="text-left">
              <h4
                className="mb-4 font-serif text-sm font-bold uppercase
                  tracking-widest text-[#E6C84A]"
              >
                Impormasyon sa Pakikipag-ugnayan
              </h4>

              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span
                    className="text-gold-gradient font-bold"
                    aria-hidden="true"
                  >
                    📍
                  </span>

                  <span>
                    Sto. Niño Parish, Bustos, Bulacan, Philippines
                  </span>
                </li>

                <li className="flex items-center gap-2">
                  <span
                    className="text-gold-gradient font-bold"
                    aria-hidden="true"
                  >
                    📞
                  </span>

                  <span>(044) 617 1727</span>
                </li>

                <li className="flex items-center gap-2">
                  <span
                    className="text-gold-gradient font-bold"
                    aria-hidden="true"
                  >
                    🌐
                  </span>

                  <a
                    href="https://www.facebook.com/sakristangbustosenyo"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-red-200 transition-colors
                      hover:text-white hover:underline"
                  >
                    facebook.com/sakristangbustosenyo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom banner */}
          <div
            className="space-y-5 border-t border-red-900/60
              pt-8 text-center"
          >
            <div className="flex flex-wrap justify-center gap-2">
              <span
                className="rounded border border-red-800/30
                  bg-red-900/40 px-2.5 py-1 text-xs text-red-200"
              >
                #sakristangbustosenyo
              </span>

              <span
                className="rounded border border-red-800/30
                  bg-red-900/40 px-2.5 py-1 text-xs text-red-200"
              >
                #ministremusetnonministremur
              </span>
            </div>

            {/* Developer button */}
            <button
              type="button"
              onClick={() => setIsDeveloperOpen(true)}
              className="group inline-flex items-center justify-center
                gap-2 border-b border-[#D4AF37]/60 pb-1
                font-serif text-xs font-bold tracking-wide
                text-[#E6C84A] transition-all duration-300
                hover:border-[#E6C84A] hover:text-yellow-200
                focus:outline-none focus:ring-2
                focus:ring-[#D4AF37]/70 focus:ring-offset-4
                focus:ring-offset-red-950"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25
                    M6.75 17.25 1.5 12l5.25-5.25
                    M14.25 3.75l-4.5 16.5"
                />
              </svg>

              Kilalanin ang Web Developer
            </button>

            <p
              className="text-[10px] font-semibold uppercase
                tracking-widest text-red-300/60"
            >
              © {currentYear} Ministry of Altar Servers · Sto. Niño
              Parish, Bustos, Bulacan. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Developer profile modal */}
      {isDeveloperOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center
            justify-center overflow-y-auto bg-black/85
            px-3 py-4 backdrop-blur-md sm:px-4 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="developer-title"
          onClick={closeDeveloper}
        >
          <div
            className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-5xl
              overflow-y-auto rounded-sm border
              border-[#D4AF37]/30 bg-stone-50 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal top border */}
            <div
              className="h-1 w-full bg-gradient-to-r
                from-[#510708] via-[#D4AF37] to-[#510708]"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={closeDeveloper}
              className="absolute right-4 top-5 z-20 flex h-9 w-9
                items-center justify-center rounded-full
                border border-white/20 bg-black/20 text-white
                backdrop-blur-sm transition-all hover:bg-black/40
                focus:outline-none focus:ring-2
                focus:ring-[#D4AF37]"
              aria-label="Isara ang developer profile"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,380px)_1fr]">
              {/* Developer photograph */}
              <div
                className="relative h-72 overflow-hidden
                  bg-[#510708] sm:h-[420px] lg:h-full lg:min-h-[650px]"
              >
                <img
                  src={developerPhoto}
                  alt="John Railey Pael, Web Developer"
                  className="absolute inset-0 h-full w-full
                    object-cover object-top"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
                    from-black/80 via-transparent to-black/10"
                />

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <p
                    className="font-serif text-2xl font-bold
                      text-white"
                  >
                    John Railey Pael
                  </p>

                  <p
                    className="mt-1 text-[10px] font-bold uppercase
                      tracking-[0.16em] text-[#E6C84A]"
                  >
                    Web Developer · Altar Server
                  </p>
                </div>
              </div>

              {/* Developer information */}
              <div
                className="p-5 sm:p-8 lg:max-h-[calc(100dvh-4rem)]
                  lg:overflow-y-auto lg:p-10"
              >
                <span
                  className="text-[10px] font-bold uppercase
                    tracking-[0.18em] text-red-800"
                >
                  Sa Likod ng Website
                </span>

                <h2
                  id="developer-title"
                  className="mt-2 font-serif text-3xl font-bold
                    leading-tight text-red-950 sm:text-4xl"
                >
                  Paglilingkod sa Dambana at sa Digital na Pamayanan
                </h2>

                <div className="my-6 h-px w-16 bg-[#D4AF37]" />

                <p
                  className="text-sm leading-7 text-stone-700
                    sm:text-base sm:leading-8"
                >
                  Si <strong>John Railey Pael</strong> ay mula sa Bisita
                  ng Mahal na Birhen ng Sto. Rosario sa Barangay Bonga Menor.
                  Nagsimula siyang maglingkod sa dambana sa edad na
                  labing-apat at pormal na na-induct bilang kasapi ng
                  Ministry of Altar Servers noong 2019.
                </p>

                <p
                  className="mt-4 text-sm leading-7 text-stone-700
                    sm:text-base sm:leading-8"
                >
                  Sa paglipas ng mga taon, ginampanan niya ang iba't
                  ibang tungkulin sa organisasyon. Mula sa pagiging
                  barangay coordinator hanggang sa kasalukuyang
                  paglilingkod bilang vice president, patuloy niyang
                  iniaalay ang kanyang kakayahan, oras, at kaalaman para
                  sa ministri.
                </p>

                <p
                  className="mt-4 text-sm leading-7 text-stone-700
                    sm:text-base sm:leading-8"
                >
                  Bilang bumuo ng website na ito, pinagsama niya ang
                  paglilingkod at teknolohiya upang magkaroon ang
                  ministri ng maayos na digital na tahanan—isang lugar
                  para maipakilala ang organisasyon, maitala ang mga
                  lingkod, at maibahagi ang mga gawain ng parokya.
                </p>

                {/* Service timeline */}
                <div className="mt-8">
                  <h3
                    className="font-serif text-lg font-bold
                      text-red-950"
                  >
                    Talaan ng Paglilingkod
                  </h3>

                  <div
                    className="mt-5 border-l
                      border-[#D4AF37]/60 pl-5"
                  >
                    {ministryService.map((service) => (
                      <div
                        key={service.years}
                        className="relative pb-6 last:pb-0"
                      >
                        <span
                          className="absolute -left-[25px] top-1
                            h-2 w-2 rounded-full bg-[#D4AF37]
                            ring-4 ring-stone-50"
                        />

                        <p
                          className="text-[10px] font-bold uppercase
                            tracking-[0.14em] text-red-800"
                        >
                          {service.years}
                        </p>

                        <p
                          className="mt-1 font-serif text-base
                            font-bold text-stone-900"
                        >
                          {service.role}
                        </p>

                        <p
                          className="mt-1 text-xs leading-5
                            text-stone-600"
                        >
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing recognition */}
                <blockquote
                  className="mt-8 border-l-2 border-red-900
                    bg-red-50 px-5 py-4 font-serif text-sm
                    italic leading-6 text-red-950"
                >
                  “Ang bawat kakayahan ay maaaring maging isang paraan
                  ng paglilingkod kapag inialay nang may pananampalataya
                  at malasakit.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

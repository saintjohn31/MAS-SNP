import React from "react";

export default function JoinSection() {
  const qualifications = [
    "Kabataang lalaki na may edad na 10 hanggang 16 taong gulang.",
    "Binyagang Katoliko at nakatanggap na ng Unang Komunyon.",
    "Naninirahan sa mga lugar na sakop ng Parokya ni Sto. Niño.",
  ];

  const requirements = [
    "Autobiography na may kumpletong impormasyon",
    "Kopya ng Katibayan ng Binyag at Kumpil",
    "Kopya ng Katibayan ng Unang Komunyon",
    "Sulat ng pahintulot mula sa Magulang o Tagapangalaga",
    "Dalawang piraso ng 2x2 na larawan",
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "I-download ang Template",
      description:
        "I-download at i-print ang Autobiography Template sa short bond paper.",
    },
    {
      number: "02",
      title: "Kumpletuhin ang Dokumento",
      description:
        "Sagutan nang malinaw at tapat, pagkatapos ay papirmahan sa magulang o tagapangalaga.",
    },
    {
      number: "03",
      title: "Ihanda ang Requirements",
      description:
        "Ihanda ang autobiography, mga katibayan, consent letter, at 2x2 na larawan.",
    },
    {
      number: "04",
      title: "Isumite sa Ministri",
      description:
        "Personal na isumite ang requirements sa officer, coordinator, o adviser ng Ministri.",
    },
    {
      number: "05",
      title: "Dumalo sa Panayam",
      description:
        "Hintayin ang iskedyul ng panayam at sumama sa iyong magulang o tagapangalaga.",
    },
  ];

  return (
    <section
      id="join"
      className="relative border-t border-stone-200
        overflow-hidden bg-white py-16 text-stone-950 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute bottom-0 right-0
          h-96 w-96 rounded-full bg-red-950/5 blur-[120px]"
      />

      <div
        className="relative z-10 mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8"
      >
        {/* Section heading */}
        <div
          className="mb-16 border-l-2 border-red-900
            pl-6 text-left"
        >
          <span
            className="mb-1 block text-[10px] font-bold uppercase
              tracking-widest text-stone-500"
          >
            Maging Bahagi ng Bokasyon
          </span>

          <h2
            className="font-serif text-3xl font-bold text-red-950
              sm:text-5xl"
          >
            Sumapi sa{" "}
            <span className="text-gold-gradient">Amin</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 items-start gap-12
            lg:grid-cols-12"
        >
          {/* Qualifications and requirements */}
          <div className="space-y-8 lg:col-span-5">
            <div
              className="space-y-4 rounded border
                border-stone-200 bg-stone-50 p-6 shadow-sm"
            >
              <h3
                className="border-b border-stone-200 pb-2
                  font-serif text-base font-bold uppercase
                  tracking-widest text-red-900"
              >
                Mga Katangian
              </h3>

              <ul className="space-y-4 text-sm text-stone-700">
                {qualifications.map((qualification) => (
                  <li
                    key={qualification}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-0.5 shrink-0 font-bold
                        text-red-700"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="leading-6">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="space-y-4 rounded border
                border-stone-200 bg-stone-50 p-6 shadow-sm"
            >
              <h3
                className="border-b border-stone-200 pb-2
                  font-serif text-base font-bold uppercase
                  tracking-widest text-red-900"
              >
                Mga Kailangang Dokumento
              </h3>

              <ul className="space-y-3 text-sm text-stone-700">
                {requirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0
                        rounded-full bg-red-900"
                    />
                    <span className="leading-5">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Autobiography PDF */}
            <div
              className="space-y-4 rounded border border-red-200
                bg-red-50 p-6 text-center shadow-sm"
            >
              <div
                className="mx-auto flex h-12 w-12 items-center
                  justify-center rounded-full bg-red-950
                  text-[#E6C84A]"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0
                      0-3.375-3.375h-1.5A1.125 1.125 0 0
                      1 13.5 7.125v-1.5A3.375 3.375 0 0
                      0 10.125 2.25H8.25m0 12.75h7.5m-7.5
                      3H12M10.5 2.25H5.625c-.621 0-1.125.504
                      -1.125 1.125v17.25c0 .621.504 1.125
                      1.125 1.125h12.75c.621 0 1.125-.504
                      1.125-1.125V11.625a9.348 9.348 0 0
                      0-9-9.375Z"
                  />
                </svg>
              </div>

              <div>
                <h4 className="font-serif font-bold text-red-950">
                  Autobiography Template
                </h4>
                <p
                  className="mt-2 text-justify text-xs
                    leading-relaxed text-stone-600"
                >
                  Printable PDF na may personal information, faith
                  background, mga gabay na tanong, at bahagi para sa
                  pirma ng aplikante at magulang.
                </p>
              </div>

              <a
                href="/Autobiography-Template-MAS-SNP.pdf"
                download="Autobiography-Template-MAS-SNP.pdf"
                className="inline-flex items-center justify-center rounded
    bg-red-950 px-5 py-3 text-xs font-bold uppercase
    tracking-wider text-[#E6C84A] transition-colors
    hover:bg-red-900"
              >
                I-download ang Autobiography Template
              </a>

              <p className="text-[10px] text-stone-500">
                PDF · Letter size · 3 pahina · Handang i-print
              </p>
            </div>
          </div>

          {/* Personal application guide */}
          <div className="lg:col-span-7">
            <div
              className="overflow-hidden rounded border
                border-stone-200 bg-stone-50 shadow-md"
            >
              <div
                className="bg-gradient-to-br from-red-950
                  to-red-900 p-6 text-white sm:p-8"
              >
                <span
                  className="text-[10px] font-bold uppercase
                    tracking-[0.18em] text-red-300"
                >
                  Personal na Pagpapatala
                </span>
                <h3
                  className="mt-2 font-serif text-2xl font-bold
                    sm:text-3xl"
                >
                  Gabay sa Pagsali sa Ministri
                </h3>
                <p
                  className="mt-3 max-w-2xl text-sm leading-6
                    text-red-100/80"
                >
                  Walang online registration. Ang aplikasyon ay
                  personal na isinusumite upang makilala nang maayos
                  ang aplikante at ang kanyang magulang o
                  tagapangalaga.
                </p>
              </div>

              <div className="space-y-0 bg-white p-6 sm:p-8">
                {applicationSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {index !== applicationSteps.length - 1 && (
                      <div
                        className="absolute left-5 top-10 h-full
                          w-px bg-[#D4AF37]/40"
                      />
                    )}
                    <div
                      className="relative z-10 flex h-10 w-10
                        shrink-0 items-center justify-center
                        rounded-full border border-[#D4AF37]/50
                        bg-red-50 font-serif text-xs font-bold
                        text-red-900"
                    >
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h4
                        className="font-serif text-base font-bold
                          text-red-950"
                      >
                        {step.title}
                      </h4>
                      <p
                        className="mt-1 text-sm leading-6
                          text-stone-600"
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="border-t border-stone-200 bg-stone-50
                  px-6 py-5 sm:px-8"
              >
                <p className="text-xs leading-5 text-stone-600">
                  <strong className="text-red-900">Paalala:</strong>{" "}
                  Ang pagsusumite ng requirements ay hindi pa
                  awtomatikong pagtatalaga bilang altar server.
                  Kinakailangan pa ring makumpleto ang panayam,
                  pagsasanay, at pagsusulit ng Ministri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

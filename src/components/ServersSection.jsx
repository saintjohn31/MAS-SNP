import React from "react";

import monsleo from "../monsleo.png";
import bishopDennis from "../bishopdennis.png";

import FormalClaude from "../FormalClaude.png";
import FormalJRP from "../FormalJRP.png";
import FormalJoshua from "../FormalJoshua.png";
import FormalEmman from "../FormalEmman.png";
import FormalFranklin from "../FormalFranklin.png";
import FormalMyron from "../FormalMyron.png";

export default function ServersSection() {
  const advisers = [
    {
      role: "Bishop of Malolos",
      name: "Most Rev. Dennis C. Villarojo, D.D.",
      image: bishopDennis,
      location: "Diocese of Malolos",
    },
    {
      role: "Parish Priest",
      name: "Rev. Msgr. Leocadio P. De Jesus",
      image: monsleo,
      location: "Sto. Niño Parish · Bustos, Bulacan",
    },
  ];

  const executives = [
    {
      role: "President",
      name: "Bro. John Claude Jasildo",
      image: FormalClaude,
    },
    {
      role: "Vice-President",
      name: "Bro. John Railey Pael",
      image: FormalJRP,
    },
    {
      role: "Secretary",
      name: "Bro. Joshua William Garcia",
      image: FormalJoshua,
    },
    {
      role: "Treasurer",
      name: "Bro. ---------------------",
      image: null,
    },
    {
      role: "Auditor",
      name: "Bro. Franklin John Eraldo",
      image: FormalFranklin,
    },
    {
      role: "P.I.O. (Tanawan, Malamig, Bonga Menor, Bonga Mayor)",
      name: "Bro. Jose Emmanuel Galvez",
      image: FormalEmman,
    },
    {
      role: "P.I.O. (Cambaog, Talampas, San Pedro, Poblacion)",
      name: "Bro. Marc Myron Sanchez",
      image: FormalMyron,
    },
  ];

  const coordinators = [
    {
      barangay: "Bisita ng Sta. Monica - Bonga Mayor",
      name: "Bro. Jiro Santos",
    },
    {
      barangay: "Bisita ng Sto. Rosario - Bonga Menor",
      name: "Bro. John Matthew Gongon",
    },
    {
      barangay: "Bisita ng Banal na Krus - Tanawan",
      name: "Bro. Jay Kenneth Ramos",
    },
    {
      barangay: "Bisita ng Immaculada Concepcion - Malamig",
      name: "Bro. Elijah Buensuceso",
    },
    {
      barangay: "Bisita ng Banal na Krus - Poblacion",
      name: "Bro. Kelvin Dela Cruz",
    },
    {
      barangay: "Bisita ni San Pedro - San Pedro",
      name: "Bro. Raighlee Sanchez",
    },
    {
      barangay: "Bisita ng Sta. Cruz - Talampas",
      name: "Bro. Jose Bernard Ditche",
    },
    {
      barangay: "Bisita ni San Jose - Cambaog",
      name: "Bro. Emjey Marcelo",
    },
  ];

  return (
    <section
      id="servers"
      className="relative border-t border-stone-200
        bg-white py-24 text-stone-900"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3
          h-[700px] w-[700px] -translate-x-1/2
          -translate-y-1/2 rounded-full bg-red-950/5
          blur-[150px]"
      />

      <div
        className="relative z-10 mx-auto max-w-7xl space-y-20
          px-4 sm:px-6 lg:px-8"
      >
        {/* Main section heading */}
        <div className="border-l-2 border-red-900 pl-6 text-left">
          <span
            className="mb-1 block text-[10px] font-bold uppercase
              tracking-widest text-stone-500"
          >
            Ang Aming Organisasyon
          </span>

          <h2
            className="font-serif text-3xl font-bold text-red-950
              sm:text-5xl"
          >
            Pamunuan at mga{" "}
            <span className="text-gold-gradient">
              Lingkod ng Ministri
            </span>
          </h2>
        </div>

        {/* Spiritual shepherds */}
        <div className="space-y-6">
          <div
            className="flex flex-col justify-between gap-2
              border-b border-stone-200 pb-3
              sm:flex-row sm:items-baseline"
          >
            <h3
              className="font-serif text-xl font-bold
                text-red-950 sm:text-2xl"
            >
              Mga Pastol ng Simbahan
            </h3>

            <span className="text-xs font-semibold text-stone-500">
              Gumagabay sa pananampalataya at paglilingkod ng Ministri
            </span>
          </div>

          {/* Bishop and Parish Priest cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {advisers.map((adviser) => (
              <div
                key={adviser.name}
                className="group overflow-hidden rounded border
                  border-stone-200 bg-stone-50 shadow-sm
                  transition-all duration-300
                  hover:border-red-900/30 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div
                    className="relative h-72 w-full shrink-0
                      overflow-hidden bg-[#510708]
                      sm:h-64 sm:w-48"
                  >
                    <img
                      src={adviser.image}
                      alt={`${adviser.name}, ${adviser.role}`}
                      className="h-full w-full object-cover object-top
                        transition-transform duration-500
                        group-hover:scale-105"
                    />

                    <div
                      className="pointer-events-none absolute inset-0
                        bg-gradient-to-t from-black/20
                        via-transparent to-transparent"
                    />
                  </div>

                  {/* Information */}
                  <div
                    className="flex flex-1 flex-col justify-center
                      p-6 text-center sm:text-left"
                  >
                    <span
                      className="block text-[10px] font-bold uppercase
                        tracking-[0.14em] text-red-800"
                    >
                      {adviser.role}
                    </span>

                    <span
                      className="mt-2 block font-serif text-xl
                        font-bold leading-snug text-stone-900
                        sm:text-2xl"
                    >
                      {adviser.name}
                    </span>

                    <span
                      className="mt-3 block text-xs leading-5
                        text-stone-500"
                    >
                      {adviser.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Council */}
        <div className="space-y-6">
          <div
            className="flex flex-col justify-between gap-2
              border-b border-stone-200 pb-3
              sm:flex-row sm:items-baseline"
          >
            <h3
              className="font-serif text-xl font-bold
                text-red-950 sm:text-2xl"
            >
              Central Council Executive Officers
            </h3>

            <span className="text-xs font-semibold text-stone-500">
              Namumuno at nangangasiwa sa mga gawain ng Ministri
            </span>
          </div>

          <div
            className="grid grid-cols-1 gap-6
              sm:grid-cols-2 lg:grid-cols-4"
          >
            {executives.map((executive) => (
              <div
                key={executive.role}
                className="group overflow-hidden rounded
                  border border-stone-200 bg-stone-50
                  shadow-sm transition-all duration-300
                  hover:border-yellow-600/30 hover:shadow-md"
              >
                {/* Officer image */}
                <div
                  className="relative h-72 w-full overflow-hidden
                    bg-[#510708]"
                >
                  {executive.image ? (
                    <img
                      src={executive.image}
                      alt={`${executive.name}, ${executive.role}`}
                      className="h-full w-full object-cover object-top
                        transition-transform duration-500
                        group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full flex-col
                        items-center justify-center gap-3
                        bg-gradient-to-br from-[#510708]
                        to-red-950 text-red-100"
                    >
                      <svg
                        className="h-12 w-12 text-[#E6C84A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0
                            3.75 3.75 0 0 1 7.5 0ZM4.501
                            20.118a7.5 7.5 0 0 1 14.998 0
                            17.933 17.933 0 0 1-7.499
                            1.632 17.933 17.933 0 0 1-7.499
                            -1.632Z"
                        />
                      </svg>

                      <span
                        className="text-[10px] font-bold uppercase
                          tracking-[0.16em] text-red-200/70"
                      >
                        Larawan ay ilalagay
                      </span>
                    </div>
                  )}

                  <div
                    className="pointer-events-none absolute inset-0
                      bg-gradient-to-t from-black/45
                      via-transparent to-transparent"
                  />
                </div>

                {/* Officer information */}
                <div className="p-5">
                  <span
                    className="mb-2 block text-[10px] font-bold
                      uppercase leading-4 tracking-wider
                      text-red-800"
                  >
                    {executive.role}
                  </span>

                  <span
                    className="block font-serif text-base
                      font-bold leading-snug text-stone-900"
                  >
                    {executive.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Barangay coordinators */}
        <div className="space-y-6">
          <div
            className="flex flex-col justify-between gap-2
              border-b border-stone-200 pb-3
              sm:flex-row sm:items-baseline"
          >
            <h3
              className="font-serif text-xl font-bold
                text-red-950 sm:text-2xl"
            >
              Mga Barangay Coordinator
            </h3>

            <span className="text-xs font-semibold text-stone-500">
              Nangangasiwa sa mga barangay na sakop ng parokya
            </span>
          </div>

          <div
            className="grid grid-cols-1 gap-6
              sm:grid-cols-2 lg:grid-cols-4"
          >
            {coordinators.map((coordinator) => (
              <div
                key={coordinator.barangay}
                className="rounded border border-stone-200
                  bg-stone-50 p-5 transition-all
                  hover:border-red-900/30 hover:shadow-sm"
              >
                <div className="min-w-0">
                  <span
                    className="block text-[10px] font-bold uppercase
                      leading-4 tracking-wider text-red-800"
                  >
                    {coordinator.barangay}
                  </span>

                  <span
                    className="mt-1 block font-serif text-sm
                      font-bold text-stone-900"
                  >
                    {coordinator.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
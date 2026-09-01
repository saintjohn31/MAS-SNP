import React, { useEffect, useMemo, useState } from "react";

import sanTarcisio1 from "../santarcisio1.jpg";
import sanTarcisio2 from "../santarcisio2.jpg";

export default function AboutSection() {
  const ministryFoundations = [
    {
      article: "Artikulo I",
      title: "Ngalan at Kakanyahan",
      description:
        "Ang Ministri ng mga Tagapaglingkod sa Dambana ay binubuo ng mga kabataang lalaking tinawag upang maglingkod sa Parokya ni Sto. Niño, sa mga bisita, at sa mga pamayanang Kristiyanong nasasakupan nito.",
      icon: "✦",
    },
    {
      article: "Artikulo III",
      title: "Patron ng mga Altar Server",
      description:
        "Kinikilala si San Tarcisio bilang patron at huwaran ng mga altar server dahil sa kanyang katapangan, matatag na pananampalataya, at dakilang paggalang sa Banal na Sakramento.",
      icon: "✝",
    },
    {
      article: "Artikulo VI",
      title: "Pamunuan ng Ministri",
      description:
        "Ang Central Council ang nangangasiwa at namumuno sa buong Ministri sa ilalim ng paggabay ng Kura Paroko at ng mga tagapayo nito, alinsunod sa itinakdang pamantayan.",
      icon: "♛",
    },
    {
      article: "Artikulo VII",
      title: "Pagtawag at Pagsali",
      description:
        "Ang mga nagnanais maging altar server ay dumaraan sa pagpapatala, panayam, pagsasanay, at pagsusulit bilang paghahanda sa maayos at responsableng paglilingkod.",
      icon: "◆",
    },
    {
      article: "Artikulo VIII",
      title: "Pagkilala at Pagtatalaga",
      description:
        "Ang mga bagong kasapi ay pormal na binibigyan ng atas matapos ang kanilang pagsasanay. Ang mga kasalukuyang kasapi naman ay taunang nagpapanibago ng kanilang pagtatalaga.",
      icon: "❖",
    },
    {
      article: "Artikulo XV–XVI",
      title: "Disiplina at Pananagutan",
      description:
        "Inaasahan sa bawat kasapi ang disiplina, paggalang, maayos na pag-uugali, wastong kasuotan, at pagiging mabuting halimbawa sa loob at labas ng Simbahan.",
      icon: "⚜",
    },
  ];

  const virtues = [
    {
      title: "Paggalang",
      description:
        "Pinangalagaan niya ang kabanalan ng Banal na Eukaristiya.",
    },
    {
      title: "Katapangan",
      description:
        "Hindi niya tinalikuran ang tungkulin kahit nanganganib ang kanyang buhay.",
    },
    {
      title: "Paglilingkod",
      description:
        "Buong kababaang-loob niyang tinanggap ang misyong ipinagkatiwala sa kanya.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-stone-200 bg-stone-50 py-16 text-stone-950 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4
          h-96 w-96 rounded-full bg-red-950/5 blur-[120px]"
      />

      <div
        className="relative z-10 mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8"
      >
        {/* Main section heading */}
        <div className="mb-16 border-l-2 border-red-900 pl-6">
          <span
            className="mb-1 block text-[10px] font-bold uppercase
              tracking-widest text-stone-500"
          >
            Mula noong 1867
          </span>

          <h2
            className="font-serif text-3xl font-bold
              text-red-950 sm:text-5xl"
          >
            Tungkol sa{" "}
            <span className="text-gold-gradient">Amin</span>
          </h2>
        </div>

        {/* About the altar servers */}
        <div
          className="mb-16 overflow-hidden rounded border
            border-red-900/15 bg-white shadow-md"
        >
          <div
            className="grid grid-cols-1 items-stretch
              lg:grid-cols-12"
          >
            <div
              className="flex flex-col justify-center bg-red-950
                p-6 text-white sm:p-8 lg:col-span-4 lg:p-10"
            >
              <span
                className="text-[10px] font-bold uppercase
                  tracking-[0.2em] text-[#E6C84A]"
              >
                Paglilingkod · Pananampalataya · Kapatiran
              </span>

              <h3
                className="mt-3 font-serif text-2xl font-bold
                  leading-tight sm:text-3xl"
              >
                Sino Kami Bilang mga Lingkod sa Dambana
              </h3>

              <div className="mt-5 h-px w-14 bg-[#D4AF37]" />

              <p
                className="mt-5 text-sm leading-7
                  text-red-100/80"
              >
                Tinawag upang maglingkod nang may kababaang-loob,
                disiplina, at pag-ibig sa Diyos at sa Simbahan.
              </p>
            </div>

            <div
              className="space-y-5 p-6 sm:p-8
                lg:col-span-8 lg:p-10"
            >
              <p
                className="drop-cap text-justify text-sm
                  leading-7 text-stone-700 sm:text-base
                  sm:leading-8"
              >
                Ang <strong>mga Lingkod sa Dambana</strong> ng
                Parokya ni Sto. Niño ay isang pamayanan ng mga
                <strong> kabataang lalaki</strong> na kusang
                inihahandog ang kanilang oras, kakayahan, at sarili
                upang tumulong sa taimtim at maayos na pagdiriwang
                ng Banal na Liturhiya. Higit sa
                pagsasagawa ng mga tungkulin sa santuwaryo, ang
                kanilang paglilingkod ay isang tugon sa tawag ng
                Diyos at isang pagsasabuhay ng pananampalataya.
              </p>

              <p
                className="text-justify text-sm leading-7
                  text-stone-600 sm:text-base sm:leading-8"
              >
                Sa pamamagitan ng regular na formation, panalangin,
                pagsasanay, at pakikiisa sa mga gawain ng parokya,
                hinuhubog ang bawat kasapi sa disiplina,
                pananagutan, paggalang sa Banal na Eukaristiya, at
                malasakit sa kapwa. Layunin ng Ministri na mahubog
                ang mga kabataang lalaking hindi lamang mahusay
                maglingkod sa dambana, kundi mabubuting halimbawa
                rin sa kanilang tahanan, paaralan, at pamayanan.
              </p>

              <div
                className="grid grid-cols-1 gap-3 pt-2
                  sm:grid-cols-3"
              >
                {[
                  {
                    title: "Sa Dambana",
                    text: "Taimtim at maayos na paglilingkod sa Banal na Liturhiya.",
                  },
                  {
                    title: "Sa Pamayanan",
                    text: "Pakikiisa at malasakit sa mga gawain ng parokya.",
                  },
                  {
                    title: "Sa Araw-araw",
                    text: "Pagsasabuhay ng disiplina, pananampalataya, at mabuting asal.",
                  },
                ].map((identity) => (
                  <div
                    key={identity.title}
                    className="rounded border border-stone-200
                      bg-stone-50 p-4"
                  >
                    <h4
                      className="font-serif text-sm font-bold
                        text-red-900"
                    >
                      {identity.title}
                    </h4>

                    <p
                      className="mt-2 text-xs leading-5
                        text-stone-600"
                    >
                      {identity.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Renewal members directory */}
        <MembersDirectory />

        <div className="flex flex-col">
          {/* Parish history and ministry information */}
          <div
            className="order-2 mt-16 grid grid-cols-1 items-start gap-12
            lg:grid-cols-12"
          >
            {/* History */}
            <div className="space-y-6 lg:col-span-7">
              <h3
                className="font-serif text-2xl font-bold
                tracking-wide text-red-900"
              >
                Ang Kasaysayan ng Bustos at ng Parokya ni Sto. Niño
              </h3>

              <p
                className="drop-cap text-justify text-base
                leading-relaxed text-stone-800"
              >
                Ang Bustos ay dating bahagi ng Baliuag sa aspektong
                pampolitika at pananampalataya. Subalit, isang malungkot
                at makasaysayang trahedya noong taong{" "}
                <strong>1862</strong> ang nagbago sa tadhana ng
                pamayanan.
              </p>

              <p
                className="text-justify text-sm leading-relaxed
                text-stone-700 sm:text-base"
              >
                Sa panahon ng tag-ulan noong taong iyon, itinakda ng
                kura paroko sa Baliuag ang isang Misa para sa
                pagbibinyag ng mga sanggol mula sa Bustos. Upang
                makatawid sa umaapaw na ilog, sumakay ang mga magulang,
                sanggol, at mga ninong sa isang{" "}
                <em>“Placenta”</em>—mga bangkang pinagdugtong ng
                kawayang sahig. Dahil sa malalakas na hampas ng hangin
                at ragasa ng baha, nawalan ng kontrol ang mga
                tagagabay, tumagilid ang sasakyan, at nalunod ang
                karamihan sa mga pasahero.
              </p>

              <p
                className="text-justify text-sm leading-relaxed
                text-stone-700 sm:text-base"
              >
                Sa matinding pagnanais na huwag nang maulit ang
                trahedya, nagkaisa ang mga mamamayan ng Bustos na
                magtayo ng sarili nilang simbahan. Idineklara ang
                Bustos bilang isang independiyenteng bayan noong{" "}
                <strong>1867</strong>. Bilang pag-alaala sa mga sanggol
                na nalunod habang patungo sa kanilang binyag, pinili ng
                buong bayan ang{" "}
                <strong>Banal na Sanggol (Sto. Niño)</strong> bilang
                kanilang Patron.
              </p>

              <div
                className="flex flex-wrap items-center gap-4
                border-t border-stone-200 pt-4 font-serif
                text-[11px] font-bold uppercase tracking-wider
                text-stone-400"
              >
                <span>Pamantayan at Gabay sa Paghubog 2009</span>
                <span aria-hidden="true">•</span>
                <span>Diyosesis ng Malolos</span>
              </div>
            </div>

            {/* Maxim and objectives */}
            <div className="space-y-8 lg:col-span-5">
              <div
                className="relative overflow-hidden rounded border
                border-red-800 bg-gradient-to-br
                from-red-950 to-red-900 p-6 text-white
                shadow-xl sm:p-8"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0
                  h-24 w-24 rounded-full bg-[#D4AF37]
                  opacity-5 blur-xl"
                />

                <div className="relative space-y-4">
                  <span
                    className="block text-[10px] font-bold uppercase
                    tracking-widest text-red-300"
                  >
                    Ang Aming Maxim
                  </span>

                  <h4
                    className="text-gold-gradient font-serif text-xl
                    font-extrabold tracking-wide sm:text-2xl"
                  >
                    “MINISTREMUS ET NON MINISTREMUR”
                  </h4>

                  <p className="font-serif text-xs italic text-red-200/70">
                    “...that we may serve and not be served.”
                  </p>

                  <blockquote
                    className="border-l border-[#D4AF37]/30 py-1
                    pl-4 text-justify font-serif text-sm italic
                    leading-relaxed text-red-100"
                  >
                    “...tulad ng Anak ng Tao na naparito, hindi upang
                    paglingkuran kundi upang maglingkod at ialay ang
                    kanyang buhay upang matubos ang marami.”

                    <span
                      className="text-gold-gradient mt-2 block
                      text-right text-xs font-bold"
                    >
                      — Mateo 20:28
                    </span>
                  </blockquote>
                </div>
              </div>

              <div
                className="space-y-6 rounded border border-stone-200
                bg-white p-6 shadow-md sm:p-8"
              >
                <div>
                  <h4
                    className="mb-2 font-serif text-sm font-bold
                    uppercase tracking-widest text-red-900"
                  >
                    Layunin ng Ministri
                  </h4>

                  <p
                    className="text-justify text-xs leading-relaxed
                    text-stone-600 sm:text-sm"
                  >
                    Mahubog ang mga kabataang lalaki sa isang buhay,
                    masigla, mapagmahal, mapagtiwala, at tunay na
                    paglilingkod sa Diyos, habang pinananatili ang
                    taimtim, maringal, at banal na pagdiriwang ng mga
                    Sakramento.
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <h4
                    className="mb-2 font-serif text-sm font-bold
                    uppercase tracking-widest text-red-900"
                  >
                    Gampanin ng Ministri
                  </h4>

                  <p
                    className="text-justify text-xs leading-relaxed
                    text-stone-600 sm:text-sm"
                  >
                    Bumuo ng mga mapagtiwalang kabataang naglilingkod
                    alinsunod sa Salita ng Diyos at maging mabubuting
                    huwaran ng kagandahang-asal sa loob at labas ng
                    Simbahan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Saint Tarcisius section */}
          <div
            className="order-1 mt-16 grid grid-cols-1 items-start gap-12
            lg:grid-cols-12"
          >
            {/* Patron history */}
            <div className="space-y-6 lg:col-span-7">
              <div>
                <span
                  className="text-[10px] font-bold uppercase
                  tracking-[0.18em] text-red-800"
                >
                  Patron ng mga Lingkod sa Dambana
                </span>

                <h3
                  className="mt-2 font-serif text-2xl font-bold
                  leading-tight text-red-950 sm:text-4xl"
                >
                  Ang Aming Patrong si San Tarcisio
                </h3>

                <div className="mt-5 h-px w-16 bg-[#D4AF37]" />
              </div>

              <p
                className="drop-cap text-justify text-base
                leading-relaxed text-stone-800"
              >
                <strong>San Tarcisio</strong> ay isang batang
                Kristiyano na nabuhay sa Roma noong ikatlong siglo,
                sa panahong inuusig ang mga tagasunod ni Kristo. Ayon
                sa sinaunang tradisyon ng Simbahan, siya ay
                pinagkatiwalaang magdala ng Banal na Eukaristiya sa
                mga Kristiyanong nakabilanggo at naghihintay ng
                kamatayan dahil sa kanilang pananampalataya.
              </p>

              <p
                className="text-justify text-sm leading-relaxed
                text-stone-700 sm:text-base"
              >
                Habang naglalakbay, hinarang siya ng isang pangkat na
                nagtangkang kunin at lapastanganin ang kanyang
                dinadalang Banal na Sakramento. Sa halip na isuko ang
                Eukaristiya, buong tapang niya itong ipinagsanggalang.
                Siya ay malubhang sinaktan at namatay dahil sa mga
                sugat na kanyang tinamo, ngunit nanatili siyang tapat
                sa sagradong tungkuling ipinagkatiwala sa kanya.
              </p>

              <div>
                <h4
                  className="font-serif text-lg font-bold
                  text-red-950"
                >
                  Bakit Siya ang Patron ng mga Altar Server?
                </h4>

                <p
                  className="mt-3 text-justify text-sm leading-7
                  text-stone-700 sm:text-base"
                >
                  Tulad ng mga lingkod sa dambana, si San Tarcisio ay
                  naglingkod nang malapit sa Banal na Eukaristiya. Ang
                  kanyang paggalang sa Katawan ni Kristo, katapatan sa
                  tungkulin, at kahandaang magsakripisyo ang dahilan
                  kung bakit siya kinikilalang patron at huwaran ng
                  mga altar server.
                </p>
              </div>

              <blockquote
                className="border-l-2 border-[#D4AF37] pl-5
                font-serif text-sm italic leading-7 text-red-950
                sm:text-base"
              >
                Sa kanyang murang edad, ipinakita ni San Tarcisio na
                ang tunay na paglilingkod ay may kasamang tapang,
                pananampalataya, at lubos na pag-ibig kay Kristo.
              </blockquote>

              <div
                className="flex flex-wrap items-center gap-4 border-t
                border-stone-200 pt-4 font-serif text-[11px]
                font-bold uppercase tracking-wider text-stone-400"
              >
                <span>Martir ng Banal na Eukaristiya</span>
                <span aria-hidden="true">•</span>
                <span>Kapistahan · Agosto 15</span>
              </div>
            </div>

            {/* Patron cards */}
            <div className="space-y-8 lg:col-span-5">
              <div
                className="relative aspect-[4/3] overflow-hidden
                rounded border border-red-800 bg-red-950 shadow-xl"
              >
                <img
                  src={sanTarcisio1}
                  alt="San Tarcisio, patron ng mga altar server"
                  className="absolute inset-0 h-full w-full
                  object-cover object-top"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t
                  from-black via-black/10 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <span
                    className="text-[9px] font-bold uppercase
                    tracking-[0.2em] text-[#F2D65C]"
                  >
                    Huwaran ng Kabataang Naglilingkod
                  </span>

                  <h4
                    className="mt-2 font-serif text-3xl font-bold
                    leading-tight text-white"
                  >
                    Katapatan Hanggang sa Huling Sandali
                  </h4>
                </div>

                <div
                  className="absolute right-5 top-5 z-20 aspect-[3/4]
                  w-20 overflow-hidden rounded border
                  border-[#D4AF37] bg-red-950 shadow-xl sm:w-24"
                >
                  <img
                    src={sanTarcisio2}
                    alt="Paglalarawan kay San Tarcisio at sa Banal na Eukaristiya"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <div
                className="rounded border border-stone-200 bg-white
                p-6 shadow-md sm:p-8"
              >
                <h4
                  className="font-serif text-sm font-bold uppercase
                  tracking-widest text-red-900"
                >
                  Bakit Siya Kinikilalang Santo?
                </h4>

                <p
                  className="mt-3 text-justify text-xs leading-relaxed
                  text-stone-600 sm:text-sm"
                >
                  Kinikilala ng Simbahan si San Tarcisio bilang isang
                  martir sapagkat inialay niya ang kanyang buhay
                  alang-alang kay Kristo at sa Banal na Eukaristiya.
                  Ang kanyang kabanalan ay kinilala sa sinaunang
                  tradisyon at patuloy na debosyon ng Simbahan.
                </p>

                <div
                  className="mt-6 border-t border-stone-200 pt-5"
                >
                  <h4
                    className="font-serif text-sm font-bold uppercase
                    tracking-widest text-red-900"
                  >
                    Mga Huwarang Katangian
                  </h4>

                  <div className="mt-4 space-y-4">
                    {virtues.map((virtue) => (
                      <div key={virtue.title}>
                        <span
                          className="font-serif text-sm font-bold
                          text-red-900"
                        >
                          {virtue.title}
                        </span>

                        <p
                          className="mt-1 text-xs leading-5
                          text-stone-600"
                        >
                          {virtue.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* By-laws */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div
            className="mb-10 flex flex-col justify-between gap-4
              border-b border-stone-200 pb-5
              md:flex-row md:items-end"
          >
            <div>
              <span
                className="block text-[10px] font-bold uppercase
                  tracking-[0.18em] text-red-800"
              >
                Pamantayan at Gabay sa Paghubog · 2009
              </span>

              <h3
                className="mt-2 font-serif text-2xl font-bold
                  text-red-950 sm:text-3xl"
              >
                Saligan ng Ministri
              </h3>
            </div>

            <p
              className="max-w-xl text-justify text-xs
                leading-relaxed text-stone-500 sm:text-sm"
            >
              Ang paglilingkod ng bawat kasapi ay ginagabayan ng mga
              tuntuning humuhubog sa pananampalataya, disiplina,
              pamumuno, at pananagutan sa Diyos at sa pamayanan.
            </p>
          </div>

          {/* Foundation cards */}
          <div
            className="grid grid-cols-1 gap-6
              md:grid-cols-2 lg:grid-cols-3"
          >
            {ministryFoundations.map((foundation) => (
              <article
                key={foundation.article}
                className="group relative overflow-hidden rounded
                  border border-stone-200 bg-white p-6 shadow-sm
                  transition-all duration-300 hover:-translate-y-1
                  hover:border-red-900/30 hover:shadow-md"
              >
                <div
                  className="absolute right-4 top-3 font-serif
                    text-5xl text-red-950/5 transition-colors
                    group-hover:text-red-950/10"
                  aria-hidden="true"
                >
                  {foundation.icon}
                </div>

                <span
                  className="relative block text-[9px] font-bold
                    uppercase tracking-[0.18em] text-red-800"
                >
                  {foundation.article}
                </span>

                <h4
                  className="relative mt-2 font-serif text-lg
                    font-bold text-red-950"
                >
                  {foundation.title}
                </h4>

                <div
                  className="relative my-4 h-px w-10
                    bg-[#D4AF37]"
                />

                <p
                  className="relative text-justify text-xs
                    leading-6 text-stone-600 sm:text-sm"
                >
                  {foundation.description}
                </p>
              </article>
            ))}
          </div>

          {/* PDF download */}
          <div
            className="mt-8 flex flex-col justify-between gap-5
              rounded border border-red-900/10 bg-red-50
              px-5 py-5 sm:flex-row sm:items-center sm:px-6"
          >
            <div>
              <p
                className="font-serif text-sm font-bold
                  text-red-950 sm:text-base"
              >
                Pamantayan at Gabay sa Paghubog
              </p>

              <p className="mt-1 text-xs leading-5 text-stone-600">
                Ministry of Altar Servers · Parokya ni Sto. Niño ·
                Bustos, Bulacan · Isinaayos noong Mayo 2009
              </p>

              <p className="mt-2 text-[10px] text-stone-500">
                Ang buong opisyal na dokumento ay maaaring
                i-download at basahin sa PDF format.
              </p>
            </div>

            <a
              href="/MAS-SNP-Bylaws-2009.pdf"
              download="MAS-SNP-Bylaws-2009.pdf"
              className="group inline-flex shrink-0 items-center
    justify-center gap-2 rounded border
    border-[#D4AF37]/50 bg-red-950 px-5 py-3
    text-[10px] font-bold uppercase tracking-[0.12em]
    text-[#E6C84A] shadow-sm transition-all
    duration-300 hover:-translate-y-0.5
    hover:border-[#E6C84A] hover:bg-red-900
    hover:text-yellow-200 hover:shadow-md"
            >
              I-download ang Buong By-Laws
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const MEMBERS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/12t5w-hz12dgyBN7Uh2foR2m3JcHWnZs5/gviz/tq?tqx=out:csv&gid=10196480";

function MembersDirectory() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBarangay, setSelectedBarangay] = useState("Lahat");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRenewals() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(MEMBERS_SHEET_URL, {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Hindi mabasa ang kasalukuyang member list.");
        }

        const csv = await response.text();
        const rows = parseCsv(csv);

        /*
          Mga kasapi mula sa renewal list sa Sheet:
          1 = Number, 2 = Name, 3 = Address/Barangay.
          Hindi kinukuha ang birthdate, age, at rank.
        */
        const renewalMembers = rows
          .slice(2)
          .filter((row) => row[1]?.trim() && row[2]?.trim())
          .map((row) => ({
            id: row[1].trim(),
            name: cleanCell(row[2]),
            barangay: cleanCell(row[3]) || "Hindi Natukoy",
          }));

        setMembers(renewalMembers);
      } catch (loadError) {
        if (loadError.name !== "AbortError") {
          setError(loadError.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRenewals();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    const closeWithEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [isOpen]);

  const barangays = useMemo(
    () => [
      "Lahat",
      ...Array.from(new Set(members.map((member) => member.barangay))).sort(
        (a, b) => a.localeCompare(b),
      ),
    ],
    [members],
  );

  const filteredMembers = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return members.filter((member) => {
      const matchesBarangay =
        selectedBarangay === "Lahat" ||
        member.barangay === selectedBarangay;

      const matchesSearch =
        !query ||
        member.name.toLocaleLowerCase().includes(query) ||
        member.barangay.toLocaleLowerCase().includes(query);

      return matchesBarangay && matchesSearch;
    });
  }, [members, search, selectedBarangay]);

  const groupedMembers = useMemo(() => {
    return filteredMembers.reduce((groups, member) => {
      if (!groups[member.barangay]) {
        groups[member.barangay] = [];
      }

      groups[member.barangay].push(member);
      return groups;
    }, {});
  }, [filteredMembers]);

  return (
    <>
      <section
        id="members"
        className="mt-16 overflow-hidden rounded border border-red-900/15 bg-white shadow-md"
      >
        <div className="flex flex-col gap-6 bg-red-950 px-6 py-8 text-white sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6C84A]">
              Ministry Directory
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold leading-tight sm:text-3xl">
              Mga Kasapi ng Ministry of Altar Servers
            </h3>
            <p className="mt-3 text-sm leading-7 text-red-100/80">
              Tingnan ang mga kasapi na nakaayos ayon sa kanilang
              barangay o bisita.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-red-950 shadow-md transition hover:-translate-y-0.5 hover:bg-[#E6C84A] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-950"
          >
            Mga Kasapi ng Ministry of Altar Servers
          </button>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-x-0 bottom-0 top-16 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="members-modal-title"
            className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded border border-[#D4AF37]/40 bg-white shadow-2xl sm:h-auto sm:max-h-full"
          >
            <div className="relative shrink-0 bg-red-950 px-5 py-5 pr-16 text-white sm:px-8 sm:py-7 lg:px-10">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6C84A]">
                    Ministry Directory
                  </span>

                  <h3 id="members-modal-title" className="mt-2 font-serif text-xl font-bold leading-tight sm:mt-3 sm:text-3xl">
                    Mga Kasapi ng Ministry of Altar Servers
                  </h3>

                  <div className="mt-3 h-px w-14 bg-[#D4AF37] sm:mt-5" />

                  <p className="mt-3 hidden max-w-2xl text-sm leading-7 text-red-100/80 sm:block">
                    Kilalanin ang mga kasaping nagpapanibago ng kanilang
                    pagtatalaga sa paglilingkod. Ang listahan ay nakaayos ayon
                    sa barangay o bisitang kanilang kinabibilangan.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:min-w-64 sm:gap-3">
                  <DirectoryStat label="Mga Kasapi" value={members.length} />
                  <DirectoryStat
                    label="Mga Barangay"
                    value={Math.max(barangays.length - 1, 0)}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Isara ang listahan ng mga kasapi"
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl leading-none text-white transition hover:bg-white hover:text-red-950 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] sm:right-5 sm:top-5"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 gap-4 border-b border-stone-200 pb-6 md:grid-cols-[minmax(0,1fr)_260px]">
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Hanapin ang Kasapi
                  </span>
                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Ilagay ang pangalan o barangay..."
                    className="h-12 w-full rounded border border-stone-300 bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    Salain Ayon sa Barangay
                  </span>
                  <select
                    value={selectedBarangay}
                    onChange={(event) => setSelectedBarangay(event.target.value)}
                    className="h-12 w-full rounded border border-stone-300 bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
                  >
                    {barangays.map((barangay) => (
                      <option key={barangay} value={barangay}>
                        {barangay}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {loading && <MembersLoading />}

              {!loading && error && (
                <div className="mt-8 rounded border border-red-200 bg-red-50 p-6 text-center">
                  <h4 className="font-serif text-lg font-bold text-red-950">
                    Hindi Maipakita ang Member List
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{error}</p>
                  <a
                    href={MEMBERS_SHEET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-xs font-bold uppercase tracking-wider text-red-900 hover:underline"
                  >
                    Buksan ang Source Sheet
                  </a>
                </div>
              )}

              {!loading && !error && filteredMembers.length === 0 && (
                <div className="mt-8 rounded border border-stone-200 bg-stone-50 p-8 text-center">
                  <h4 className="font-serif text-lg font-bold text-red-950">
                    Walang Nakitang Kasapi
                  </h4>
                  <p className="mt-2 text-sm text-stone-600">
                    Subukang baguhin ang pangalan o barangay na hinahanap.
                  </p>
                </div>
              )}

              {!loading && !error && filteredMembers.length > 0 && (
                <div className="mt-8 space-y-10">
                  {Object.entries(groupedMembers)
                    .sort(([barangayA], [barangayB]) =>
                      barangayA.localeCompare(barangayB),
                    )
                    .map(([barangay, barangayMembers]) => (
                      <BarangayMembers
                        key={barangay}
                        barangay={barangay}
                        members={barangayMembers}
                      />
                    ))}
                </div>
              )}

              <div className="mt-10 border-t border-stone-200 pt-5">
                <p className="text-[10px] leading-5 text-stone-500 sm:text-xs">
                  Hindi ipinapakita ang birthdate, edad, at iba pang personal na
                  impormasyon ng mga kasapi.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function BarangayMembers({ barangay, members }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-stone-200 pb-3">
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-800">
            Barangay / Bisita
          </span>
          <h4 className="mt-1 font-serif text-xl font-bold text-red-950">
            {barangay}
          </h4>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-900">
          {members.length} {members.length === 1 ? "Kasapi" : "Kasapi"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((member) => (
          <article
            key={`${member.id}-${member.name}`}
            className="group rounded border border-stone-200 bg-stone-50 p-4 transition hover:border-red-900/20 hover:bg-white hover:shadow-sm"
          >
            <div className="flex items-start">
              <div className="min-w-0">
                <h5 className="font-serif text-sm font-bold leading-5 text-stone-900 group-hover:text-red-900">
                  Bro. {member.name}
                </h5>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DirectoryStat({ label, value }) {
  return (
    <div className="rounded border border-white/10 bg-white/5 p-4 text-center">
      <strong className="block font-serif text-2xl text-[#F0D76A]">
        {value}
      </strong>
      <span className="mt-1 block text-[9px] font-bold uppercase tracking-widest text-red-100/60">
        {label}
      </span>
    </div>
  );
}

function MembersLoading() {
  return (
    <div className="mt-8 space-y-8 animate-pulse">
      {[1, 2].map((group) => (
        <div key={group}>
          <div className="h-7 w-44 rounded bg-stone-200" />
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <div key={member} className="h-20 rounded bg-stone-100" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let cell = "";
  let insideQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];
    const nextCharacter = csv[index + 1];

    if (character === '"' && insideQuotes && nextCharacter === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      insideQuotes = !insideQuotes;
    } else if (character === "," && !insideQuotes) {
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !insideQuotes) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }

      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function cleanCell(value = "") {
  return value.replace(/\s+/g, " ").trim();
}

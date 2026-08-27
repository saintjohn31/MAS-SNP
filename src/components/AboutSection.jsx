import React from "react";

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

        {/* History and ministry information */}
        <div
          className="grid grid-cols-1 items-start gap-12
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

        {/* Patron heading */}
        <div
          className="mt-16 flex flex-col justify-between gap-4 sm:mt-20 lg:mt-24
            border-b border-stone-200 pb-5
            md:flex-row md:items-end"
        >
          <div className="border-l-2 border-red-900 pl-5">
            <span
              className="block text-[10px] font-bold uppercase
                tracking-[0.18em] text-red-800"
            >
              Patron ng mga Lingkod sa Dambana
            </span>

            <h3
              className="mt-2 font-serif text-2xl font-bold
                leading-tight text-red-950 sm:text-4xl"
            >
              Ang Aming Patrong si{" "}
              <span className="text-gold-gradient">
                San Tarcisio
              </span>
            </h3>
          </div>

          <p
            className="max-w-lg text-justify text-xs leading-6
              text-stone-500 sm:text-sm"
          >
            Martir ng Banal na Eukaristiya at huwaran ng kabataang
            naglilingkod nang may katapangan, pananampalataya, at
            paggalang sa mga banal na bagay.
          </p>
        </div>

        {/* Saint Tarcisius section */}
        <div className="mt-10">
          <div
            className="grid grid-cols-1 items-start gap-8
              lg:grid-cols-12"
          >
            {/* Independent image card */}
            <div
              className="relative h-[380px] overflow-hidden rounded
                border border-red-900/15 bg-red-950 shadow-lg
                sm:h-[480px] lg:sticky lg:top-28 lg:col-span-5 lg:h-[560px]"
            >
              <img
                src={sanTarcisio1}
                alt="San Tarcisio, patron ng mga altar server"
                className="absolute inset-0 h-full w-full
                  object-cover object-top"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t
                  from-black/85 via-black/15 to-black/10"
              />

              {/* Secondary image */}
              <div
                className="absolute bottom-6 right-6 h-32 w-24
                  overflow-hidden rounded border-2
                  border-[#D4AF37]/80 bg-red-950 shadow-2xl
                  sm:h-40 sm:w-32"
              >
                <img
                  src={sanTarcisio2}
                  alt="Paglalarawan kay San Tarcisio"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute bottom-5 left-5 max-w-[55%] sm:bottom-6 sm:left-6 sm:max-w-[58%]">
                <span
                  className="text-[9px] font-bold uppercase
                    tracking-[0.2em] text-[#F0D76A]"
                >
                  Patron ng mga Altar Server
                </span>

                <h3
                  className="mt-2 font-serif text-3xl font-bold
                    text-white sm:text-4xl"
                >
                  San Tarcisio
                </h3>

                <p className="mt-2 text-xs text-stone-300">
                  Martir ng Banal na Eukaristiya
                  <span className="block">
                    Kapistahan: Agosto 15
                  </span>
                </p>
              </div>
            </div>

            {/* Independent information card */}
            <div
              className="space-y-6 rounded border
                border-red-900/15 bg-white p-6 shadow-lg
                sm:p-8 lg:col-span-7 lg:p-10"
            >
              <div>
                <span
                  className="text-[10px] font-bold uppercase
                    tracking-[0.18em] text-red-800"
                >
                  Huwaran ng Kabataang Naglilingkod
                </span>

                <h3
                  className="mt-2 font-serif text-2xl font-bold
                    leading-tight text-red-950 sm:text-4xl"
                >
                  Katapatan Hanggang sa Huling Sandali
                </h3>

                <div className="mt-5 h-px w-16 bg-[#D4AF37]" />
              </div>

              <p
                className="text-justify text-sm leading-7
                  text-stone-700 sm:text-base sm:leading-8"
              >
                Si <strong>San Tarcisio</strong> ay isang batang
                Kristiyano na nabuhay sa Roma noong ikatlong siglo,
                sa panahong inuusig ang mga tagasunod ni Kristo.
                Ayon sa sinaunang tradisyon ng Simbahan, siya ay
                pinagkatiwalaang magdala ng Banal na Eukaristiya sa
                mga Kristiyanong nakabilanggo at naghihintay ng
                kamatayan dahil sa kanilang pananampalataya.
              </p>

              <p
                className="text-justify text-sm leading-7
                  text-stone-700 sm:text-base sm:leading-8"
              >
                Habang naglalakbay, hinarang siya ng isang pangkat na
                nagtangkang kunin at lapastanganin ang kanyang
                dinadalang Banal na Sakramento. Sa halip na isuko ang
                Eukaristiya, buong tapang niya itong ipinagsanggalang.
                Siya ay malubhang sinaktan at namatay dahil sa mga
                sugat na kanyang tinamo, ngunit nanatili siyang tapat
                sa sagradong tungkuling ipinagkatiwala sa kanya.
              </p>

              {/* Why he is recognized as a saint */}
              <div
                className="rounded border border-red-900/10
                  bg-red-50 p-5 sm:p-6"
              >
                <h4
                  className="font-serif text-lg font-bold
                    text-red-950"
                >
                  Bakit Siya Kinikilalang Santo?
                </h4>

                <p
                  className="mt-3 text-justify text-sm leading-7
                    text-stone-700"
                >
                  Kinikilala ng Simbahan si San Tarcisio bilang isang{" "}
                  <strong>martir</strong> sapagkat inialay niya ang
                  kanyang buhay alang-alang kay Kristo at sa Banal na
                  Eukaristiya. Nabuhay siya bago pa naitatag ang
                  makabagong proseso ng pormal na canonization. Ang
                  kanyang kabanalan ay kinilala sa sinaunang
                  tradisyon at patuloy na debosyon ng Simbahan sa mga
                  martir.
                </p>
              </div>

              {/* Why he is the patron */}
              <div>
                <h4
                  className="font-serif text-lg font-bold
                    text-red-950"
                >
                  Bakit Siya ang Patron ng mga Altar Server?
                </h4>

                <p
                  className="mt-3 text-justify text-sm leading-7
                    text-stone-700"
                >
                  Tulad ng mga lingkod sa dambana, si San Tarcisio ay
                  naglingkod nang malapit sa Banal na Eukaristiya.
                  Ang kanyang paggalang sa Katawan ni Kristo,
                  katapatan sa tungkulin, at kahandaang magsakripisyo
                  ang dahilan kung bakit siya kinikilalang patron at
                  huwaran ng mga altar server.
                </p>
              </div>

              {/* Virtues */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {virtues.map((virtue) => (
                  <div
                    key={virtue.title}
                    className="rounded border border-stone-200
                      bg-stone-50 p-4"
                  >
                    <span
                      className="font-serif text-sm font-bold
                        text-red-900"
                    >
                      {virtue.title}
                    </span>

                    <p
                      className="mt-2 text-xs leading-5
                        text-stone-600"
                    >
                      {virtue.description}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote
                className="border-l-2 border-[#D4AF37]
                  pl-5 font-serif text-sm italic leading-7
                  text-red-950 sm:text-base"
              >
                Sa kanyang murang edad, ipinakita ni San Tarcisio na
                ang tunay na paglilingkod ay may kasamang tapang,
                pananampalataya, at lubos na pag-ibig kay Kristo.
              </blockquote>
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

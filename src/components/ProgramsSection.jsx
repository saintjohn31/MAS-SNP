import React from "react";

export default function ProgramsSection() {
  const facebookPageUrl =
    "https://www.facebook.com/sakristangbustosenyo";

  const facebookPluginUrl =
    "https://www.facebook.com/plugins/page.php" +
    `?href=${encodeURIComponent(facebookPageUrl)}` +
    "&tabs=timeline" +
    "&width=500" +
    "&height=700" +
    "&small_header=false" +
    "&adapt_container_width=true" +
    "&hide_cover=false" +
    "&show_facepile=true";

  const events = [
    {
      year: "2022",
      title: "Paghahandog 2022",
      description:
        "Isang maringal na taunang pagdiriwang at pagbabasbas ng mga bago at kasalukuyang tagapaglingkod sa dambana. Dito ay pormal silang nagtalaga at sumumpa ng katapatan sa paglilingkod sa Sto. Niño Parish.",
      details:
        "Pinasimulan ng ating Kura Paroko at dinaluhan ng mga namumuno sa komunidad at mga pamilya ng mga sakristan. Naging tanda ito ng patuloy na paglago ng bokasyon matapos ang panahon ng pandemiya.",
      tags: [
        "Blessing Mass",
        "Commissioning",
        "Renewal",
      ],
    },
    {
      year: "2012",
      title: "Paghahandog 2012 at Gawad Pagkilala",
      description:
        "Kasaysayan ng pagbibigay-parangal sa mga katangi-tanging sakristan na nagpamalas ng debosyon, katapatan, at tamang pag-uugali sa loob at labas ng dambana.",
      details:
        "Kasama sa mga parangal na ibinigay ang Gawad San Tarcisio kay Elizar Roldan, Gawad Beato Pedro Calungsod kay Christian Guevarra, at Gawad San Lorenzo Ruiz kay Mark Henri Ramos.",
      tags: [
        "Awards Program",
        "Liturgy",
        "Honor Roll",
      ],
    },
    {
      year: "Taunan",
      title: "Regular Formation at Liturgical Training",
      description:
        "Patuloy na pagsasanay sa wastong paglilingkod, pag-aaral ng mga sagradong kagamitan sa Misa, at paggabay sa disiplina ng mga altar server.",
      details:
        "Kasama rito ang recollection, team-building activities, at pagsasanay para sa mga bagong kasapi tuwing bakasyon o sa mga itinakdang araw ng Ministri.",
      tags: [
        "Training",
        "Recollection",
        "Formation",
      ],
    },
  ];

  return (
    <section
      id="programs"
      className="relative border-t border-stone-200
        bg-stone-50 py-24 text-stone-950"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute right-0 top-1/3
          h-96 w-96 rounded-full bg-red-950/5
          blur-[120px]"
      />

      <div
        className="relative z-10 mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8"
      >
        {/* Programs and activities */}
        <div
          className="grid grid-cols-1 gap-12
            lg:grid-cols-12"
        >
          {/* Left sticky heading */}
          <div
            className="space-y-6
              lg:col-span-4 lg:sticky lg:top-28
              lg:self-start"
          >
            <div className="border-l-2 border-red-900 pl-6">
              <span
                className="mb-1 block text-[10px] font-bold
                  uppercase tracking-widest text-stone-500"
              >
                Mga Banal na Okasyon
              </span>

              <h2
                className="font-serif text-3xl font-bold
                  leading-tight text-red-950 sm:text-5xl"
              >
                Mga Programa
                <br />
                at{" "}
                <span className="text-gold-gradient">
                  Aktibidad
                </span>
              </h2>
            </div>

            <p
              className="text-justify text-sm leading-relaxed
                text-stone-600 sm:text-base"
            >
              Ang aming Ministri ay patuloy na nagdiriwang
              ng mga makasaysayang sandali, mga gawaing
              panghubog, at pormal na pagkilala sa tapat na
              paglilingkod ng bawat kasapi sa dambana ng
              Sto. Niño.
            </p>

            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                text-xs font-bold uppercase tracking-wider
                text-red-900 transition-colors
                hover:text-red-700 hover:underline"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M22 12.07C22 6.51 17.52 2 12 2S2
                    6.51 2 12.07C2 17.09 5.66 21.25
                    10.44 22v-7.03H7.9v-2.9h2.54V9.85
                    c0-2.52 1.49-3.91 3.77-3.91
                    1.09 0 2.23.2 2.23.2v2.46h-1.26
                    c-1.24 0-1.63.78-1.63 1.57v1.9
                    h2.77l-.44 2.9h-2.33V22
                    C18.34 21.25 22 17.09 22 12.07Z"
                />
              </svg>

              Bisitahin ang Facebook Page
            </a>
          </div>

          {/* Event timeline */}
          <div className="space-y-12 lg:col-span-8">
            {events.map((event) => (
              <article
                key={`${event.year}-${event.title}`}
                className="group relative rounded border
                  border-stone-200 bg-white p-6
                  transition-all duration-300
                  hover:border-yellow-600/30
                  hover:shadow-md sm:p-8"
              >
                {/* Year badge */}
                <div
                  className="mb-4 inline-flex items-center
                    rounded border border-red-200
                    bg-red-50 px-3 py-1 text-xs
                    font-bold uppercase tracking-widest
                    text-red-900"
                >
                  Taon: {event.year}
                </div>

                <h3
                  className="mb-3 font-serif text-xl
                    font-bold text-stone-900
                    transition-colors group-hover:text-red-800
                    sm:text-2xl"
                >
                  {event.title}
                </h3>

                <p
                  className="mb-4 text-justify text-sm
                    leading-relaxed text-stone-700
                    sm:text-base"
                >
                  {event.description}
                </p>

                <div
                  className="mt-4 space-y-2 border-t
                    border-stone-200 pt-4 text-xs
                    text-stone-500 sm:text-sm"
                >
                  <span
                    className="block text-[10px] font-bold
                      uppercase tracking-widest
                      text-stone-400"
                  >
                    Tala ng Kaganapan
                  </span>

                  <p
                    className="text-justify italic
                      leading-relaxed"
                  >
                    “{event.details}”
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border
                        border-stone-200 bg-stone-100
                        px-2.5 py-1 text-xs font-semibold
                        uppercase tracking-wider
                        text-stone-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Facebook latest posts */}
        <div className="mt-24">
          <div
            className="mb-10 flex flex-col justify-between
              gap-4 border-b border-stone-200 pb-5
              md:flex-row md:items-end"
          >
            <div>
              <span
                className="block text-[10px] font-bold
                  uppercase tracking-[0.18em] text-red-800"
              >
                Mula sa Aming Facebook Page
              </span>

              <h3
                className="mt-2 font-serif text-2xl
                  font-bold text-red-950 sm:text-3xl"
              >
                Pinakabagong Balita at Mga Gawain
              </h3>
            </div>

            <p
              className="max-w-xl text-sm leading-6
                text-stone-500"
            >
              Sundan ang mga pinakabagong anunsyo,
              larawan, pagdiriwang, at aktibidad ng
              Ministry of Altar Servers.
            </p>
          </div>

          <div
            className="grid grid-cols-1 items-start gap-8
              lg:grid-cols-12"
          >
            {/* Facebook feed */}
            <div className="lg:col-span-7">
              <div
                className="mx-auto w-full max-w-[500px]
                  overflow-hidden rounded border
                  border-stone-200 bg-white shadow-md"
              >
                <iframe
                  title="Latest Facebook posts of the Ministry of Altar Servers"
                  src={facebookPluginUrl}
                  width="500"
                  height="700"
                  className="block h-[700px] w-full
                    border-0"
                  style={{
                    border: "none",
                    overflow: "hidden",
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Facebook information card */}
            <div className="lg:col-span-5">
              <div
                className="overflow-hidden rounded border
                  border-red-900/20 bg-red-950
                  text-white shadow-xl"
              >
                <div className="p-6 sm:p-8">
                  <div
                    className="mb-5 flex h-12 w-12
                      items-center justify-center rounded-full
                      bg-white text-[#1877F2]"
                  >
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M22 12.07C22 6.51 17.52 2 12 2S2
                          6.51 2 12.07C2 17.09 5.66 21.25
                          10.44 22v-7.03H7.9v-2.9h2.54V9.85
                          c0-2.52 1.49-3.91 3.77-3.91
                          1.09 0 2.23.2 2.23.2v2.46h-1.26
                          c-1.24 0-1.63.78-1.63 1.57v1.9
                          h2.77l-.44 2.9h-2.33V22
                          C18.34 21.25 22 17.09 22 12.07Z"
                      />
                    </svg>
                  </div>

                  <span
                    className="text-[10px] font-bold
                      uppercase tracking-[0.18em]
                      text-red-300"
                  >
                    Official Facebook Page
                  </span>

                  <h4
                    className="mt-2 font-serif text-2xl
                      font-bold text-[#F0D76A]"
                  >
                    Sakristang Bustosenyo
                  </h4>

                  <p
                    className="mt-4 text-sm leading-7
                      text-red-100/80"
                  >
                    Maging updated sa mga iskedyul,
                    pagdiriwang, formation, anunsyo, at
                    iba pang gawain ng aming Ministri.
                  </p>

                  <a
                    href={facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-full
                      items-center justify-center gap-2
                      rounded border border-[#D4AF37]/50
                      bg-white/5 px-5 py-3.5 text-xs
                      font-bold uppercase tracking-wider
                      text-[#F0D76A] transition-all
                      hover:border-[#F0D76A]
                      hover:bg-white/10"
                  >
                    Buksan sa Facebook

                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H18m0 0v4.5M18 6
                          10.5 13.5M6 8.25v9.75h9.75"
                      />
                    </svg>
                  </a>
                </div>

                <div
                  className="border-t border-white/10
                    bg-black/10 px-6 py-4 sm:px-8"
                >
                  <p
                    className="text-[10px] leading-5
                      text-red-200/60"
                  >
                    Ang feed ay mula sa Facebook at maaaring
                    hindi lumabas kapag naka-block ang
                    third-party cookies o social media
                    trackers sa browser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
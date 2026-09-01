import React from "react";

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/sakristangbustosenyo";

/*
  Tatlong Facebook posts.

  Dahil walang Graph API token, kailangang palitan
  nang manual ang postUrl, title, description, details,
  at tags kapag may bagong post sa Facebook Page.
*/
const facebookPosts = [
  {
    label: "Pinakabagong Post",
    title: "Maligayang Kaarawan, Bro. Railey Reyes!",
    description:
      "Isang mabiyaya at maligayang kaarawan sa ating kapatid na si Bro. Railey Reyes mula sa Bisita ng San Pedro. Nawa ay patuloy siyang pagpalain at gabayan ng Panginoon sa kanyang buhay at paglilingkod.",
    details:
      "Ang Ministry of Altar Servers ay nakikiisa sa pagdiriwang ng kanyang kaarawan at nagpapasalamat sa kanyang tapat na paglilingkod sa dambana.",
    tags: [
      "Maligayang Kaarawan",
      "Kapatiran",
      "Paglilingkod",
    ],
    postUrl:
      "https://www.facebook.com/sakristangbustosenyo/posts/1394434189543184",
  },
  {
    label: "Ikalawang Pinakabagong Post",
    title: "Sakristang Bustosenyo, Tara Lets!",
    description:
      "Pormal nang sinimulan ang Tarcisian Cup 2026 bilang isang pagdiriwang ng pagkakaisa, paglilingkod, at magandang samahan ng mga kabataang lingkod sa dambana.",
    details:
      "Sa paggabay ni San Tarcisio ng Roma, nawa ay patuloy nating isabuhay ang pananampalataya hindi lamang sa dambana, kundi maging sa ating pakikipagkapwa.",
    tags: [
      "Tarcisian Cup",
      "Altar Servers",
      "Sakristang Bustosenyo",
    ],
    postUrl:
      "https://www.facebook.com/sakristangbustosenyo/posts/1390422179944385",
  },
  {
    label: "Ikatlong Pinakabagong Post",
    title: "Opisyal nang Binuksan ang Tarcisian Cup 2026",
    description:
      "Opisyal nang binuksan ang Tarcisian Cup 2026 sa pangunguna ni Bro. John Claude Polinta Jasildo sa pambungad na panalangin at mga paunang gawain.",
    details:
      "Ang gawaing ito ay naglalayong palakasin ang samahan, disiplina, at pagkakaisa ng mga kabataang naglilingkod sa dambana.",
    tags: [
      "Opening Ceremony",
      "Tarcisian Cup",
      "Pagkakaisa",
    ],
    postUrl:
      "https://www.facebook.com/sakristangbustosenyo/posts/1387511703568766",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="
        relative overflow-hidden
        border-t border-stone-200
        bg-stone-50 py-14
        text-stone-950
        sm:py-20 lg:py-24
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute
          right-0 top-1/3
          h-80 w-80 rounded-full
          bg-red-950/5 blur-[120px]
          sm:h-96 sm:w-96
        "
      />

      <div
        className="
          relative z-10 mx-auto
          w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* Heading — nasa itaas ng cards */}
        <div
          className="
            mb-10 flex flex-col
            justify-between gap-5
            border-b border-stone-200
            pb-6
            md:flex-row md:items-end
          "
        >
          <div
            className="
              border-l-2 border-red-900
              pl-4 sm:pl-6
            "
          >
            <span
              className="
                mb-1 block text-[10px]
                font-bold uppercase
                tracking-[0.18em]
                text-stone-500
              "
            >
              Mula sa Aming Facebook Page
            </span>

            <h2
              className="
                font-serif text-3xl
                font-bold leading-tight
                text-red-950
                sm:text-4xl lg:text-5xl
              "
            >
              Mga Balita
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              at{" "}
              <span className="text-gold-gradient">
                Gawain
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-xl text-left
              text-sm leading-6
              text-stone-500
              sm:text-justify sm:text-base
            "
          >
            Tunghayan ang tatlong pinakabagong
            anunsyo, larawan, pagdiriwang, at
            gawain mula sa opisyal na Facebook
            page ng Ministry of Altar Servers.
          </p>
        </div>

        {/* Three Facebook cards */}
        <div className="space-y-8">
          {facebookPosts.map((post, index) => (
            <FacebookPostCard
              key={post.postUrl}
              post={post}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Facebook link */}
        <div
          className="
            mt-10 border-t
            border-stone-200 pt-8
            text-center
          "
        >
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-full
              items-center justify-center
              gap-2 rounded-md
              bg-red-950 px-6 py-3
              text-xs font-bold uppercase
              tracking-wider text-white
              transition-colors
              hover:bg-red-800
              focus:outline-none
              focus:ring-2
              focus:ring-red-900
              focus:ring-offset-2
              sm:w-auto
            "
          >
            <FacebookIcon className="h-4 w-4" />

            Tingnan ang Lahat ng Post
          </a>
        </div>
      </div>
    </section>
  );
}

function FacebookPostCard({ post, index }) {
  /*
    Facebook embedded post preview.

    Ang preview na ito ay gumagamit ng eksaktong
    postUrl na nasa facebookPosts array.
  */
  const facebookPostPreviewUrl =
    "https://www.facebook.com/plugins/post.php" +
    `?href=${encodeURIComponent(post.postUrl)}` +
    "&show_text=true" +
    "&width=500";

  return (
    <article
      className="
        group overflow-hidden
        rounded-lg border
        border-stone-200
        bg-white shadow-sm
        transition-all duration-300
        hover:border-red-900/25
        hover:shadow-lg
      "
    >
      <div
        className="
          grid grid-cols-1
          lg:grid-cols-[minmax(0,1fr)_minmax(340px,500px)]
        "
      >
        {/* Card information */}
        <div
          className="
            flex min-w-0 flex-col
            justify-center p-5
            sm:p-7 lg:p-8
          "
        >
          {/* Badge */}
          <div
            className="
              mb-4 inline-flex w-fit
              items-center rounded
              border border-red-200
              bg-red-50 px-3 py-1
              text-[10px] font-bold
              uppercase tracking-[0.16em]
              text-red-900 sm:text-xs
            "
          >
            {post.label}
          </div>

          {/* Title */}
          <h3
            className="
              font-serif text-xl
              font-bold leading-tight
              text-stone-950
              transition-colors
              group-hover:text-red-900
              sm:text-2xl
            "
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4 text-left text-sm
              leading-7 text-stone-700
              sm:text-justify sm:text-base
            "
          >
            {post.description}
          </p>

          {/* Facebook note */}
          <div
            className="
              mt-5 border-t
              border-stone-200 pt-4
            "
          >
            <span
              className="
                block text-[10px]
                font-bold uppercase
                tracking-[0.16em]
                text-stone-400
              "
            >
              Tala Mula sa Facebook
            </span>

            <p
              className="
                mt-2 text-left text-xs
                italic leading-7
                text-stone-600
                sm:text-justify sm:text-sm
              "
            >
              “{post.details}”
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <PostTag key={tag} label={tag} />
            ))}
          </div>

          {/* Direct Facebook post link */}
          <a
            href={post.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Tingnan sa Facebook: ${post.title}`}
            className="
              mt-6 inline-flex
              w-full items-center
              justify-center gap-2
              self-start rounded-md
              bg-red-950 px-5 py-3
              text-xs font-bold uppercase
              tracking-wider text-white
              transition-colors
              hover:bg-red-800
              focus:outline-none
              focus:ring-2
              focus:ring-red-900
              focus:ring-offset-2
              sm:w-auto
            "
          >
            Tingnan ang Post

            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Facebook post preview */}
        <div
          className="
            min-w-0 overflow-hidden
            border-t border-stone-200
            bg-stone-100
            lg:border-l lg:border-t-0
          "
        >
          {/* Preview heading */}
          <div
            className="
              flex items-center
              justify-between gap-3
              border-b border-stone-200
              bg-white px-4 py-3
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              <div
                className="
                  flex h-9 w-9
                  shrink-0 items-center
                  justify-center rounded-full
                  bg-[#1877F2] text-white
                "
              >
                <FacebookIcon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    truncate text-sm
                    font-bold text-stone-900
                  "
                >
                  Sakristang Bustosenyo
                </p>

                <p
                  className="
                    text-[10px] text-stone-500
                  "
                >
                  Facebook Post Preview
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0 text-[9px]
                font-bold uppercase
                tracking-wider text-red-800
              "
            >
              Post {index + 1}
            </span>
          </div>

          {/* Responsive embedded post */}
          <div
            className="
              flex w-full justify-center
              overflow-hidden bg-stone-100
            "
          >
            <iframe
              title={`Facebook preview: ${post.title}`}
              src={facebookPostPreviewUrl}
              width="500"
              height="600"
              className="
                block h-[500px]
                w-full max-w-[500px]
                border-0
                sm:h-[550px]
                lg:h-[600px]
              "
              style={{
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="
                autoplay;
                clipboard-write;
                encrypted-media;
                picture-in-picture;
                web-share
              "
              loading="lazy"
            />
          </div>

          {/* Preview footer */}
          <div
            className="
              border-t border-stone-200
              bg-white px-4 py-3
              text-center
            "
          >
            <p
              className="
                text-[10px] leading-5
                text-stone-500
              "
            >
              Kapag hindi lumabas ang preview,
              maaaring naka-block ang Facebook
              content sa browser.
            </p>

            <a
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-1 inline-flex
                items-center justify-center
                gap-1.5 text-xs font-bold
                text-red-900 hover:underline
              "
            >
              Direktang buksan ang post

              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function PostTag({ label }) {
  return (
    <span
      className="
        rounded border
        border-stone-200
        bg-stone-100
        px-2.5 py-1
        text-[10px] font-semibold
        uppercase tracking-wider
        text-stone-600
        sm:text-xs
      "
    >
      #{label}
    </span>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="
          M22 12.07C22 6.51 17.52 2 12 2
          S2 6.51 2 12.07
          C2 17.09 5.66 21.25
          10.44 22v-7.03H7.9v-2.9
          h2.54V9.85c0-2.52
          1.49-3.91 3.77-3.91
          1.09 0 2.23.2 2.23.2
          v2.46h-1.26
          c-1.24 0-1.63.78-1.63 1.57
          v1.9h2.77l-.44 2.9h-2.33
          V22C18.34 21.25
          22 17.09 22 12.07Z
        "
      />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
          M13.5 6H18
          m0 0v4.5
          M18 6l-7.5 7.5
          M6 8.25V18h9.75
        "
      />
    </svg>
  );
}
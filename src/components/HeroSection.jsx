import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import coverpage from "../coverpage1.jpg";
import coverVideo from "../MAS-SNP-VID.mp4";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen, closeVideo]);

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-[100svh] items-center
          justify-center overflow-hidden bg-[#180303]
          font-sans antialiased"
      >
        {/* Background cover */}
        <div className="absolute inset-0">
          <img
            src={coverpage}
            alt="Ministry of Altar Servers of Sto. Niño Parish"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Center vignette */}
          <div
            className="absolute inset-0
              bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_10%,rgba(0,0,0,0.8)_100%)]"
          />

          {/* Top and bottom gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t
              from-black/80 via-transparent to-black/30"
          />
        </div>

        {/* Hero content */}
        <div
          className="relative z-10 mx-auto flex w-full
            max-w-6xl flex-col items-center px-4 pb-12
            pt-24 text-center sm:px-8 sm:pb-20 sm:pt-36
            lg:px-12 lg:pt-40"
        >
          {/* Parish label */}
          <div
            className="mb-6 flex items-center
              justify-center gap-3"
          >
            <span
              className="h-px w-7 bg-[#D4AF37]
                sm:w-12"
            />

            <p
              className="font-sans text-[9px] font-bold
                uppercase tracking-[0.24em] text-[#F0D76A]
                sm:text-[11px]"
            >
              Sto. Niño Parish · Bustos, Bulacan
            </p>

            <span
              className="h-px w-7 bg-[#D4AF37]
                sm:w-12"
            />
          </div>

          {/* Main heading */}
          <h1
            className="max-w-5xl text-balance font-serif
              text-[clamp(2.35rem,10vw,6.5rem)] font-bold
              leading-[0.98] tracking-[-0.035em]
              drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)]"
          >
            <span className="block text-white">
              Ministry of
            </span>

            <span
              className="mt-2 block text-[#F0D76A]"
            >
              Altar Servers
            </span>
          </h1>

          {/* Ministry motto */}
          <p
            className="mt-6 font-serif text-base italic
              tracking-[0.06em] text-[#F0D76A]
              sm:text-lg"
          >
            “Ministremus et non ministremur.”
          </p>

          {/* Main description */}
          <p
            className="mt-6 max-w-3xl text-balance
              font-sans text-[15px] font-normal leading-7
              text-stone-100/90 sm:text-lg sm:leading-8"
          >
            Isang pamayanan ng mga kabataang buong pusong
            naglilingkod sa banal na dambana—hinuhubog sa
            pananampalataya, disiplina, kapatiran, at
            pagmamahal sa Diyos.
          </p>

          {/* Video introduction */}
          <div
            className="mt-9 flex max-w-xl
              flex-col items-center"
          >
            <p
              className="mb-5 max-w-lg text-balance
                font-sans text-sm leading-6 text-stone-300
                sm:text-base sm:leading-7"
            >
              Tunghayan ang isang maikling pagpapakilala
              sa aming paglilingkod, samahan, at buhay
              bilang mga tagapaglingkod sa banal na
              dambana.
            </p>

            <button
              type="button"
              onClick={openVideo}
              className="group inline-flex min-h-12 w-full max-w-sm
                items-center justify-center gap-3 rounded-sm
                border border-white/60 bg-transparent
                px-7 py-3 font-sans text-[11px] font-bold
                uppercase tracking-[0.14em] text-white
                backdrop-blur-md transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[#E6C84A]
                hover:bg-white/5 hover:text-[#E6C84A]
                focus:outline-none focus:ring-2
                focus:ring-[#D4AF37]"
              aria-label="Panoorin ang video tungkol sa Ministry of Altar Servers"
            >
              <span
                className="flex h-7 w-7 items-center
                  justify-center rounded-full
                  border border-current"
              >
                <svg
                  className="ml-0.5 h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              Panoorin ang Aming Paglilingkod
            </button>

            <span
              className="mt-3 font-sans text-[10px]
                uppercase tracking-[0.12em] text-stone-400"
            >
              Maikling tampok na video ng MAS-SNP
            </span>
          </div>

          {/* Parish information */}
          <div
            className="mt-12 grid w-full max-w-3xl
              grid-cols-3 gap-2 border-t border-white/20
              pt-6 sm:mt-16 sm:gap-8"
          >
            {/* Foundation year */}
            <div>
              <p
                className="font-serif text-xl font-bold
                  tracking-tight text-[#F0D76A]
                  sm:text-2xl"
              >
                1867
              </p>

              <p
                className="mt-1 font-sans text-[11px]
                  uppercase tracking-[0.08em]
                  text-stone-300"
              >
                Pagkakatatag ng Parokya
              </p>
            </div>

            {/* Vocation */}
            <div>
              <p
                className="font-serif text-xl font-bold
                  italic tracking-tight text-[#F0D76A]
                  sm:text-2xl"
              >
                Servire
              </p>

              <p
                className="mt-1 font-sans text-[11px]
                  uppercase tracking-[0.08em]
                  text-stone-300"
              >
                Ang Aming Bokasyon
              </p>
            </div>

            {/* Diocese */}
            <div>
              <p
                className="font-serif text-xl font-bold
                  tracking-tight text-[#F0D76A]
                  sm:text-2xl"
              >
                Malolos
              </p>

              <p
                className="mt-1 font-sans text-[11px]
                  uppercase tracking-[0.08em]
                  text-stone-300"
              >
                Nasasakupang Diyosesis
              </p>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 z-10
            h-1 w-full bg-gradient-to-r
            from-[#510708] via-[#D4AF37]
            to-[#510708]"
        />
      </section>

      {/* Video modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex
            items-center justify-center overflow-y-auto bg-black/90
            px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Ministry of Altar Servers video"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between
                border-b border-[#D4AF37]/30
                bg-[#510708] px-4 py-3 sm:px-5"
            >
              <div>
                <p
                  className="font-serif text-base font-bold
                    text-[#F0D76A] sm:text-lg"
                >
                  Ang Aming Paglilingkod
                </p>

                <p
                  className="mt-0.5 font-sans text-[10px]
                    uppercase tracking-[0.1em]
                    text-red-200"
                >
                  Ministry of Altar Servers · Sto. Niño Parish
                </p>
              </div>

              <button
                type="button"
                onClick={closeVideo}
                className="flex h-9 w-9 items-center
                  justify-center rounded-full text-stone-200
                  transition-colors hover:bg-white/10
                  hover:text-white focus:outline-none
                  focus:ring-2 focus:ring-[#D4AF37]"
                aria-label="Isara ang video"
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
            </div>

            {/* Video player */}
            <div
              className="overflow-hidden bg-black
                shadow-2xl"
            >
              <video
                ref={videoRef}
                className="aspect-video max-h-[75vh]
                  w-full bg-black"
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={coverpage}
              >
                <source src={coverVideo} type="video/mp4" />

                Hindi sinusuportahan ng browser mo ang
                video player.
              </video>
            </div>

            <p
              className="mt-3 text-center font-sans
                text-xs text-stone-400"
            >
              Pindutin ang Esc o ang labas ng video upang
              isara.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

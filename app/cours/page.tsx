"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoursPage() {
  const videos = [
    { title: " Le mystère de l’âme divine", id: "EzJTpZYAu_I" },
    { title: " Se connecter à sa lumière intérieure", id: "oKDNP20E4X4" },
    { title: " Révéler les forces cachées de ton âme", id: "8L0O3vLcS7w" },
    { title: " Éveiller la conscience spirituelle", id: "wt8YKyXZVgk" },

    { title: " Nouveau cours bientôt", empty: true },
    { title: " Nouveau cours bientôt", empty: true },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-blue-400 text-gray-900 px-6 py-20">

      {/* HEADER */}
      <div className="mb-10 flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-white/40 border border-blue-200 rounded-lg hover:bg-white/70 transition"
        >
          ⬅ Retour
        </Link>

        <a
          href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
          target="_blank"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          🎟 S'inscrire
        </a>
      </div>

      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <img
          src="/b.JPEG"
          alt="Logo"
          className="h-16 md:h-20 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        />
      </div>

      {/* TITRE */}
      <h1 className="text-4xl font-bold text-center mb-16 tracking-wide
                     bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500
                     bg-clip-text text-transparent">
        🎬 Expérience Cinéma Spirituelle
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">

        {videos.map((video, i) => (
          <CinemaCard key={i} video={video} />
        ))}

      </div>

    </main>
  );
}

function CinemaCard({ video }: any) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (video.empty) return;

    window.dispatchEvent(
      new CustomEvent("openChatWithContext", {
        detail: video.title,
      })
    );
  };

  return (
    <div
      onClick={handleClick}
      className="relative group cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* ✨ GLOW BLEU */}
      {hover && (
        <div className="absolute -inset-3 bg-blue-400/40 blur-3xl rounded-2xl animate-pulse"></div>
      )}

      <div className={`
        relative rounded-2xl overflow-hidden transition-all duration-500
        bg-white/30 backdrop-blur-lg border border-white/40
        ${hover ? "scale-110 z-30 shadow-[0_40px_120px_rgba(0,0,0,0.3)]" : ""}
      `}>

        {/* IMAGE */}
        {!video.empty && !hover && (
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            className="w-full h-[320px] object-cover"
          />
        )}

        {/* VIDEO AUTO */}
        {!video.empty && hover && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}`}
            className="w-full h-[320px]"
            allow="autoplay"
          />
        )}

        {/* VIDE */}
        {video.empty && (
          <div className="w-full h-[320px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 text-center">

            <div className="text-4xl mb-4 opacity-60"></div>

            <p className="text-blue-900 font-medium">
              Bientôt disponible
            </p>

          </div>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* TITRE */}
        <div className="absolute bottom-0 p-5">
          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
            {video.title}
          </h3>
        </div>

        {/* PANEL */}
        {!video.empty && hover && (
          <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/60 backdrop-blur-xl">

            <a
              href={`https://youtube.com/shorts/${video.id}`}
              target="_blank"
              className="w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              ▶ Regarder maintenant
            </a>

          </div>
        )}

      </div>

    </div>
  );
}
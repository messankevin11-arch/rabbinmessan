"use client";

import { useState } from "react";
import Link from "next/link";

export default function CoursPage() {
  const videos = [
    { title: "Enseignement 1", id: "EzJTpZYAu_I" },
    { title: "Enseignement 2", id: "oKDNP20E4X4" },
    { title: "Enseignement 3", id: "8L0O3vLcS7w" },
    { title: "Enseignement 4", id: "wt8YKyXZVgk" },

    // 🆕 CASES VIDES
    { title: "Nouveau cours bientôt", empty: true },
    { title: "Nouveau cours bientôt", empty: true },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* HEADER */}
      <div className="mb-10 flex justify-between items-center flex-wrap gap-4">
        <Link
          href="/"
          className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
        >
          ⬅ Retour
        </Link>

        <a
          href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
          target="_blank"
          className="px-6 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          🎟 S'inscrire
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        📚 Expérience Cinéma Spirituelle
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

/* 🎬 CINEMA CARD */
function CinemaCard({ video }: any) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* GLOW */}
      {hover && (
        <div className="absolute -inset-2 bg-purple-600/30 blur-2xl rounded-2xl animate-pulse"></div>
      )}

      <div className={`
        relative rounded-2xl overflow-hidden transition-all duration-500
        ${hover ? "scale-110 z-30 shadow-[0_30px_100px_rgba(0,0,0,0.9)]" : ""}
      `}>

        {/* 🎯 CAS VIDEO */}
        {!video.empty && !hover && (
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            className="w-full h-[320px] object-cover"
          />
        )}

        {!video.empty && hover && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}`}
            className="w-full h-[320px]"
            allow="autoplay"
          />
        )}

        {/* 🆕 CAS VIDE */}
        {video.empty && (
          <div className="w-full h-[320px] flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-black text-center">

            <div className="text-4xl mb-4 opacity-50">🎬</div>

            <p className="text-gray-400">
              Bientôt disponible
            </p>

          </div>
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* TITRE */}
        <div className="absolute bottom-0 p-5">
          <h3 className="text-xl font-bold">
            {video.title}
          </h3>
        </div>

        {/* PANEL (UNIQUEMENT SI VIDEO) */}
        {!video.empty && hover && (
          <div className="absolute inset-0 flex flex-col justify-end p-5 bg-black/60 backdrop-blur-xl">

            <a
              href={`https://youtube.com/shorts/${video.id}`}
              target="_blank"
              className="w-full text-center bg-white text-black py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              ▶ Regarder
            </a>

          </div>
        )}

      </div>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ChatBot from "./components/ChatBot";
import { MessageCircle } from "lucide-react";

export default function Home() {

  const [places, setPlaces] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaces((prev) => (prev > 5 ? prev - 1 : prev));
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-black via-zinc-900 to-black">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative border-b border-white/10 overflow-hidden">

        {/* 🔝 HEADER FLOATING */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">

          {/* 🔵 BOUTON INSCRIPTION (REMPLACE FACEBOOK) */}
          <a 
            href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold 
                       hover:bg-blue-700 hover:scale-105 transition shadow-lg"
          >
            🎟 S'inscrire
          </a>

          {/* 💬 WHATSAPP */}
          <a
            href="https://wa.me/22893669121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-xl font-semibold 
                       hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>

        {/* IMAGE */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/bg-conference.jpg"
            alt="Conférence"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 -z-10"></div>

        {/* GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

        {/* TITRE */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-wide
                     bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300
                     bg-clip-text text-transparent
                     drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
        >
          DÉVOILEMENT DE L’ÂME
        </motion.h1>

        <p className="mt-4 text-gray-200 max-w-xl">
          Une rencontre exceptionnelle avec le Grand Rabbin 
          <span className="text-white font-semibold"> AVRAHAM MESSAN KOUDOSSOU</span>
        </p>

        <p className="mt-3 text-sm text-gray-300">
          📅 9 ET 10 MAI 2026 <br />
          ⏰ 19H À 21H30 <br />
          📍 Hôtel École Lébéné, Lomé
        </p>

        {/* COMPTEUR */}
        <div className="mt-4 px-6 py-2 bg-red-600/20 border border-red-500 rounded-xl text-red-400 font-semibold animate-pulse">
          Plus que {places} places disponibles !
        </div>

        {/* BOUTON BLANC */}
       
      </section>

      {/* CONFÉRENCIER */}
      <section className="py-24 px-6 text-center relative border-b border-white/10">

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm -z-10"></div>

        <h2 className="text-3xl font-bold mb-12">Le Conférencier</h2>

        <div className="flex flex-col items-center">

          <div className="w-44 h-44 rounded-full mb-6 overflow-hidden border border-white/20 shadow-xl">
            <img 
              src="/A.jpeg"
              alt="AVRAHAM MESSAN KOUDOSSOU"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold mb-3">
            AVRAHAM MESSAN KOUDOSSOU
          </h3>

          <p className="text-gray-400 max-w-xl leading-relaxed mb-6">
            Leader spirituel reconnu, il partage des enseignements puissants 
            pour inspirer, guider et transformer les vies.
          </p>

          <a
            href="/references-rabbin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-purple-400/30 
                       bg-gradient-to-r from-purple-500/10 to-blue-500/10
                       hover:from-purple-500/20 hover:to-blue-500/20
                       transition shadow-lg"
          >
            📖 Télécharger les références du Rabbin
          </a>

        </div>
      </section>

      {/* ACCÈS COURS */}
      <section className="py-24 px-6 text-center border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">

        <h2 className="text-3xl font-bold mb-6">
          📚 Enseignements du Rabbin
        </h2>

        <p className="text-gray-400 mb-8">
          Accédez aux cours et enseignements spirituels complets
        </p>

        <a
          href="/cours"
          className="px-10 py-4 bg-purple-600 text-white rounded-xl font-semibold 
                     hover:bg-purple-700 hover:scale-105 transition shadow-lg"
        >
          Voir les cours
        </a>

      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Réserve ta place maintenant
        </h2>

        <a
          href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-purple-600 text-white rounded-xl font-semibold 
                     hover:bg-purple-700 hover:scale-105 transition shadow-lg"
        >
          🎟 Je m’inscris
        </a>

      </section>

      <ChatBot />

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10">
        © 2026 Conférence Spirituelle - Tous droits réservés
      </footer>

    </main>
  );
}
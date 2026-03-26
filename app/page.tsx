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
    <main className="min-h-screen text-gray-900 bg-gradient-to-br from-sky-100 via-blue-200 to-blue-400">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative border-b border-blue-200 overflow-hidden">

        {/* 🔝 HEADER */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">

          <a 
            href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold 
                       hover:bg-blue-700 hover:scale-105 transition shadow-lg"
          >
            🎟 S'inscrire
          </a>

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

        {/* 🧿 LOGO */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="/B.jpeg"
            alt="Logo"
            className="h-16 md:h-20 object-contain drop-shadow-lg"
          />
        </div>

        {/* IMAGE */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/header.png"
            alt="Conférence"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/80 via-blue-300/60 to-blue-400/90 -z-10"></div>

        {/* GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-white/30 rounded-full blur-3xl"></div>

        {/* TITRE */}
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-wide
                     bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500
                     bg-clip-text text-transparent"
        >
          DÉVOILEMENT DE L’ÂME
        </motion.h1>

        {/* TEXTE */}
        <p className="mt-4 text-gray-700 max-w-xl">
          Une rencontre exceptionnelle avec le  
          <span className="text-blue-900 font-semibold"> Grand Rabbin AVRAHAM MESSAN KOUDOSSOU</span>
        </p>

        {/* INFOS */}
        <p className="mt-3 text-sm text-gray-800">
          📅 9 ET 10 MAI 2026 <br />
          ⏰ 19H À 21H30 <br />
          📍 Hôtel École Lébéné, Lomé
        </p>

        {/* COMPTEUR */}
        <div className="mt-4 px-6 py-2 bg-red-100 border border-red-400 rounded-xl text-red-600 font-semibold animate-pulse">
          Plus que {places} places disponibles !
        </div>

      </section>

      {/* CONFÉRENCIER */}
      <section className="py-24 px-6 text-center border-b border-blue-200 bg-white/40 backdrop-blur-md">

        <h2 className="text-3xl font-bold mb-12 text-blue-900">
          Le Conférencier
        </h2>

        <div className="flex flex-col items-center">

          <div className="w-44 h-44 rounded-full mb-6 overflow-hidden border border-blue-300 shadow-xl">
            <img 
              src="/A.jpeg"
              alt="AVRAHAM MESSAN KOUDOSSOU"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold mb-3 text-blue-900">
            AVRAHAM MESSAN KOUDOSSOU
          </h3>

          <p className="text-gray-700 max-w-xl leading-relaxed mb-6">
            Leader spirituel reconnu, il partage des enseignements puissants 
            pour inspirer, guider et transformer les vies.
          </p>

          <a
            href="/references-rabbin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-blue-300 
                       bg-blue-100 hover:bg-blue-200 transition shadow-lg"
          >
            📖 Télécharger les références
          </a>

        </div>
      </section>

      {/* COURS */}
      <section className="py-24 px-6 text-center border-b border-blue-200 bg-gradient-to-b from-blue-200 to-blue-300">

        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          📚 Enseignements du Rabbin
        </h2>

        <p className="text-gray-800 mb-8">
          Accédez aux enseignements spirituels complets
        </p>

        <a
          href="/cours"
          className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold 
                     hover:bg-blue-700 hover:scale-105 transition shadow-lg"
        >
          Voir les cours
        </a>

      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white/50">

        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Réserve ta place maintenant
        </h2>

        <a
          href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold 
                     hover:bg-blue-700 hover:scale-105 transition shadow-lg"
        >
          🎟 Je m’inscris
        </a>

      </section>

      <ChatBot />

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-blue-200">
        © 2026 Conférence Spirituelle - Tous droits réservés
      </footer>

    </main>
  );
}
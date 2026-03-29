"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ChatBot from "./components/ChatBot";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [places, setPlaces] = useState(17);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaces((prev) => {
        if (prev <= 5) return prev;
        const variation = Math.random() > 0.5 ? -1 : 0;
        return prev + variation;
      });
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen text-gray-900">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

        {/* HEADER */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">

          <a href="https://forms.gle/TLrMdkNxnTq9Z3Jg7" target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
            🎟 S'inscrire
          </a>

          <a href="https://wa.me/22893669121" target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition shadow-lg">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 -z-20 flex items-center justify-center bg-white"
        >
          <Image src="/B.jpeg" alt="Conférence" fill className="object-contain" />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        {/* TITRE */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold uppercase 
          bg-gradient-to-r from-white via-blue-200 to-blue-900 
          bg-clip-text text-transparent"
        >
          DÉVOILEMENT DE L’ÂME
        </motion.h1>

        <p className="mt-4 text-gray-200 max-w-xl">
          Une rencontre exceptionnelle avec le  
          <span className="text-white font-semibold"> Grand Rabbin AVRAHAM MESSAN KOUDOSSOU</span>
        </p>

        <p className="mt-3 text-sm text-gray-300">
          📅 9 ET 10 MAI 2026 <br />
          ⏰ 19H À 21H30 <br />
          📍 Hôtel École Lébéné, Lomé
        </p>

        <p className="mt-2 text-lg font-semibold text-green-400">
          Participation : 1 soir 8000 FCFA & 2 soirs 15000 FCFA
        </p>

        <div className="mt-4 px-6 py-2 bg-red-500 text-white rounded-xl animate-pulse">
          ⚠️ Plus que {places} places disponibles !
        </div>

      </section>

      {/* CONTENU */}
      <div className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-900 py-20 space-y-16">

        {/* CONFÉRENCIER */}
        <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Le Conférencier</h2>

          <div className="flex flex-col items-center">
            <div className="w-44 h-44 rounded-full overflow-hidden mb-6 shadow-xl">
              <Image src="/A.jpeg" alt="Rabbin" width={176} height={176} className="object-cover"/>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              AVRAHAM MESSAN KOUDOSSOU
            </h3>

            <p className="text-gray-200 max-w-xl mb-6">
              Leader spirituel reconnu, il partage des enseignements puissants.
            </p>

            <a href="/references-rabbin.pdf" target="_blank"
              className="px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition">
              📖 Télécharger les références
            </a>
          </div>
        </section>

        {/* COURS */}
        <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">📚 Enseignements</h2>

          <p className="text-gray-200 mb-6">
            Accédez aux enseignements spirituels complets
          </p>

          <a href="/cours"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Voir les cours
          </a>
        </section>

        {/* PAIEMENT */}
        <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Paiement</h2>

          <div className="bg-white p-6 rounded-2xl">
            <div className="flex flex-col gap-4">

              <a href="https://wa.me/22893669121?text=Paiement%20Flooz"
                className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 rounded-xl">
                <Image src="/flooz.png" alt="Flooz" width={28} height={28}/>
                Flooz
              </a>

              <a href="https://wa.me/22893669121?text=Paiement%20TMoney"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black py-3 rounded-xl">
                <Image src="/tmoney.png" alt="TMoney" width={28} height={28}/>
                TMoney
              </a>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Réserve ta place maintenant
          </h2>

          <a href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            🎟 Je m’inscris
          </a>
        </section>

      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/22893669121"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50">
        <MessageCircle />
      </a>

      <ChatBot />

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-300 text-sm bg-blue-950">
        © {new Date().getFullYear()} Conférence Spirituelle
      </footer>

    </main>
  );
}
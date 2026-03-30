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
        return prev - (Math.random() > 0.5 ? 1 : 0);
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

          <a 
            href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-lg"
          >
            🎟 S'inscrire
          </a>

          <a
            href="https://wa.me/22893669121"
            target="_blank"
            className="flex items-center gap-2 px-4 md:px-6 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition shadow-lg"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>

        {/* IMAGE HERO */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 -z-20 flex items-center justify-center bg-white"
        >
          <Image
            src="/B.jpeg"
            alt="Conférence"
            fill
            priority
            className="object-contain object-center"
          />
        </motion.div>

        {/* FILTRE BLEU EXACT */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#22c1dc]/95 via-[#22c1dc]/85 to-[#1d9fc4]/90 -z-10"></div>

        {/* TITRE */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 drop-shadow-lg"
        >
          DÉVOILEMENT DE L’ÂME
        </motion.h1>

        {/* TEXTE */}
        <p className="mt-4 text-white max-w-xl">
          Une rencontre exceptionnelle avec le  
          <span className="text-white font-semibold"> Grand Rabbin AVRAHAM MESSAN KOUDOSSOU</span>
        </p>

        {/* INFOS */}
        <p className="mt-3 text-sm text-white/90">
          📅 9 ET 10 MAI 2026 <br />
          ⏰ 19H À 21H30 <br />
          📍 Hôtel École Lébéné, Lomé
        </p>

        {/* PRIX */}
        <p className="mt-2 text-lg font-semibold text-green-300">
          Participation : 1 soir 8000 FCFA & 2 soirs 15000 FCFA
        </p>

        {/* COMPTEUR */}
        <div className={`mt-4 px-6 py-2 rounded-xl font-semibold animate-pulse ${
          places <= 7 ? "bg-red-600 text-white" : "bg-red-500 text-white"
        }`}>
          ⚠️ Plus que {places} places disponibles !
        </div>

      </section>

      {/* CONTENU BLEU CYAN */}
      <div className="bg-[#22c1dc] relative">

        {/* EFFET LÉGER */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* CONFÉRENCIER */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-24 px-6 text-center border-b border-white/20 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-12 text-white">
            Le Conférencier
          </h2>

          <div className="flex flex-col items-center">

            <div className="w-48 h-48 rounded-full mb-6 overflow-hidden shadow-2xl border-4 border-white hover:scale-110 transition duration-500 relative">
              <Image 
                src="/A.jpeg"
                alt="AVRAHAM MESSAN KOUDOSSOU"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white">
              AVRAHAM MESSAN KOUDOSSOU
            </h3>

            <p className="text-white/90 max-w-xl mb-6">
              Leader spirituel reconnu, il partage des enseignements puissants et transformateurs.
            </p>

            <a href="/references-rabbin.pdf" target="_blank"
              className="px-8 py-3 rounded-xl bg-white text-blue-900 hover:bg-blue-100 transition shadow-lg hover:scale-105">
              📖 Télécharger les références
            </a>

          </div>
        </motion.section>

        {/* COURS */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-24 px-6 text-center border-b border-white/20 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            📚 Enseignements du Rabbin
          </h2>

          <p className="text-white/90 mb-8">
            Accédez aux enseignements spirituels complets
          </p>

          <a href="/cours"
            className="px-10 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:scale-110 transition shadow-lg">
            Voir les cours
          </a>
        </motion.section>

        {/* PAIEMENT */}
        <motion.section 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="py-24 text-center border-b border-white/20 relative z-10"
        >

          <h2 className="text-3xl font-bold text-white mb-6">Paiement</h2>

          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30">

            <div className="flex flex-col gap-4">

              <a 
                href="https://wa.me/22893669121?text=Paiement%20Flooz"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-110 transition shadow-lg"
              >
                <Image src="/flooz.png" alt="Flooz" width={28} height={28}/>
                Payer avec Flooz
              </a>

              <a 
                href="https://wa.me/22893669121?text=Paiement%20TMoney"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:scale-110 transition shadow-lg"
              >
                <Image src="/tmoney.png" alt="TMoney" width={28} height={28}/>
                Payer avec TMoney
              </a>

            </div>

            <p className="text-sm text-white/80 mt-4">
              Après paiement, envoyez la preuve sur WhatsApp
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <section className="py-24 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Réserve ta place maintenant
          </h2>

          <a href="https://forms.gle/TLrMdkNxnTq9Z3Jg7" target="_blank"
            className="px-10 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:scale-110 transition shadow-xl">
            🎟 Je m’inscris
          </a>
        </section>

      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/22893669121" target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50">
        <MessageCircle />
      </a>

      <ChatBot />

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 text-sm bg-black border-t border-white/10">
        <p className="mb-2">
          © {new Date().getFullYear()} Conférence Spirituelle
        </p>
        <p className="text-gray-500 text-xs">
          Tous droits réservés • Conçu avec passion
        </p>
      </footer>

    </main>
  );
}
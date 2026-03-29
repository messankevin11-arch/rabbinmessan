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

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        {/* TITRE */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300"
        >
          DÉVOILEMENT DE L’ÂME
        </motion.h1>

        {/* TEXTE */}
        <p className="mt-4 text-gray-200 max-w-xl">
          Une rencontre exceptionnelle avec le  
          <span className="text-white font-semibold"> Grand Rabbin AVRAHAM MESSAN KOUDOSSOU</span>
        </p>

        {/* INFOS */}
        <p className="mt-3 text-sm text-gray-300">
          📅 9 ET 10 MAI 2026 <br />
          ⏰ 19H À 21H30 <br />
          📍 Hôtel École Lébéné, Lomé
        </p>

        {/* PRIX */}
        <p className="mt-2 text-lg font-semibold text-green-400">
          Participation : 1 soir 8000 FCFA & 2 soirs 15000 FCFA
        </p>

        {/* COMPTEUR */}
        <div className={`mt-4 px-6 py-2 rounded-xl font-semibold animate-pulse ${
          places <= 7 ? "bg-red-600 text-white" : "bg-red-500 text-white"
        }`}>
          ⚠️ Plus que {places} places disponibles !
        </div>

      </section>

      {/* CONTENU AVEC DEGRADÉ */}
      <div className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-900">

        {/* CONFÉRENCIER */}
        <section className="py-24 px-6 text-center border-b border-white/20">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            Le Conférencier
          </h2>

          <div className="flex flex-col items-center">

            {/* IMAGE OPTIMISÉE */}
            <div className="w-48 h-48 rounded-full mb-6 overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition duration-500 relative">
              <Image 
                src="/A.jpeg"
                alt="AVRAHAM MESSAN KOUDOSSOU"
                fill
                className="object-cover object-center"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              AVRAHAM MESSAN KOUDOSSOU
            </h3>

            <p className="text-gray-800 max-w-xl mb-6">
              Leader spirituel reconnu, il partage des enseignements puissants.
            </p>

            <a href="/references-rabbin.pdf" target="_blank"
              className="px-8 py-3 rounded-xl border bg-white hover:bg-blue-100 transition shadow-lg">
              📖 Télécharger les références
            </a>

          </div>
        </section>

        {/* COURS */}
        <section className="py-24 px-6 text-center border-b border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            📚 Enseignements du Rabbin
          </h2>

          <p className="text-gray-800 mb-8">
            Accédez aux enseignements spirituels complets
          </p>

          <a href="/cours"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-lg">
            Voir les cours
          </a>
        </section>

        {/* PAIEMENT */}
        <section className="py-24 text-center border-b border-white/20">

          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/paiement.jpg" alt="Paiement" width={40} height={40}/>
            <h2 className="text-3xl font-bold text-blue-900">Paiement</h2>
          </div>

          <p className="text-gray-800 mb-6">
            Choisissez votre moyen de paiement
          </p>

          <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">

            <div className="flex flex-col gap-4">

              {/* FLOOZ */}
              <a 
                href="https://wa.me/22893669121?text=Paiement%20Flooz"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 hover:scale-110 transition shadow-md hover:shadow-xl"
              >
                <Image src="/flooz.png" alt="Flooz" width={28} height={28}/>
                Payer avec Flooz
              </a>

              {/* TMONEY */}
              <a 
                href="https://wa.me/22893669121?text=Paiement%20TMoney"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:scale-110 transition shadow-md hover:shadow-xl"
              >
                <Image src="/tmoney.png" alt="TMoney" width={28} height={28}/>
                Payer avec TMoney
              </a>

            </div>

            <p className="text-sm text-gray-500 mt-4">
              Après paiement, envoyez la preuve sur WhatsApp
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Réserve ta place maintenant
          </h2>

          <a href="https://forms.gle/TLrMdkNxnTq9Z3Jg7" target="_blank"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition shadow-lg">
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
      <footer className="py-10 text-center text-gray-600 text-sm border-t bg-white">
        © {new Date().getFullYear()} Conférence Spirituelle - Tous droits réservés
      </footer>

    </main>
  );
}
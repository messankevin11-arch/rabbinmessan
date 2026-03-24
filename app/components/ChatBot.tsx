"use client";

import { useState, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // 🔔 Bulle d'attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowHint(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // 🙏 Message automatique
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            role: "ai",
            content:
              "🙏 Shalom ! Bienvenue à la conférence du Grand Rabbin AVRAHAM MESSAN KOUDOSSOU. Comment puis-je vous aider ?",
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  // 🧠 Détection intelligente inscription
  const wantsToRegister = (text: string) => {
    const msg = text.toLowerCase();

    const keywords = [
      "inscription",
      "inscrire",
      "m'inscrire",
      "sinscrire",
      "s'inscrire",
      "inscrit",
      "participer",
      "réserver",
      "reserver",
      "venir",
      "place",
      "ticket",
      "billet",
      "assister",
    ];

    const typos = [
      "insciption",
      "inscrption",
      "insription",
      "insrire",
      "inscire",
      "inscriree",
      "inscrir",
      "incription",
      "inscriotion",
      "sinscription",
      "sincrire",
      "sincire",
    ];

    const natural = [
      "je veux venir",
      "je veux participer",
      "je peux venir",
      "je peux participer",
      "je suis intéressé",
      "ça m'intéresse",
      "comment faire",
      "comment réserver",
      "je veux m'inscrire",
    ];

    const found =
      keywords.some((k) => msg.includes(k)) ||
      typos.some((k) => msg.includes(k)) ||
      natural.some((k) => msg.includes(k));

    const fuzzy =
      msg.includes("insc") ||
      msg.includes("partic") ||
      msg.includes("reser");

    return found || fuzzy;
  };

  // 📊 TRACK CLICK
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    console.log("Nombre de clics inscription :", clickCount + 1);
  };

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    const showCTA = wantsToRegister(message);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: message },
      {
        role: "ai",
        content: data.reply,
        cta: showCTA,
      },
    ]);

    setMessage("");
    setLoading(false);
  };

  return (
    <>
      {/* 💬 BOUTON FLOTTANT */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 flex flex-col items-end gap-2">

          {showHint && (
            <div className="bg-white text-black text-sm px-4 py-2 rounded-xl shadow-lg animate-bounce">
              👋 Besoin d’infos sur la conférence ?
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              setShowHint(false);
            }}
            className="bg-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition relative"
          >
            💬
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          </button>
        </div>
      )}

      {/* 💬 CHATBOX */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-800">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-semibold">
              Assistant IA
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✖
            </button>
          </div>

          {/* MESSAGES */}
          <div className="h-60 overflow-y-auto mb-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col">

                <span className="text-xs text-gray-500 mb-1">
                  {m.role === "user" ? "Toi" : "IA"}
                </span>

                <div
                  className={`p-2 rounded-lg text-sm ${
                    m.role === "user"
                      ? "bg-purple-600 text-white self-end"
                      : "bg-zinc-800 text-white self-start"
                  }`}
                >
                  {m.content}

                  {/* 🎟 BOUTON INSCRIPTION */}
                  {m.cta && (
                    <a
                      href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
                      target="_blank"
                      onClick={handleClick}
                      className="block mt-3 text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                    >
                      🎟 S’inscrire maintenant
                    </a>
                  )}
                </div>

              </div>
            ))}

            {loading && (
              <p className="text-sm text-gray-400 animate-pulse">
                IA écrit...
              </p>
            )}
          </div>

          {/* INPUT */}
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pose ta question..."
            className="w-full p-3 rounded-xl bg-white text-black 
                       placeholder-gray-400 outline-none
                       focus:ring-2 focus:ring-purple-500"
          />

          {/* BOUTON ENVOYER */}
          <button
            onClick={sendMessage}
            className="mt-2 w-full bg-purple-600 p-2 rounded-xl hover:bg-purple-700 transition text-white font-semibold"
          >
            Envoyer
          </button>

        </div>
      )}
    </>
  );
}
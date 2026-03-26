"use client";

import { useState, useEffect, useRef } from "react";

type Message = {
  role: "user" | "ai";
  content: string;
  cta?: boolean;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  // 🎯 Questions spirituelles
  const quickQuestions = [
    " Qu’est-ce que l’âme divine ?",
    " Comment se connecter à son âme ?",
    " Comment dévoiler les richesses cachées dans son âme ?",
    " Quelle est la date et le lieu de l’évènement ?",
  ];

  // 👋 Message immersif
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            role: "ai",
            content:
              "🙏 Shalom…\n\nCe n’est pas un hasard si tu es ici.\n\nChaque âme cherche une lumière.\n\nJe suis là pour t’accompagner… Que veux-tu découvrir ?",
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  // 📜 Scroll auto
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  // 🧠 Détection inscription
  const wantsToRegister = (text: string) => {
    const msg = text.toLowerCase();

    return (
      ["inscription", "participer", "réserver", "venir"].some((k) =>
        msg.includes(k)
      ) || msg.includes("insc")
    );
  };

  // 🚀 Envoi message
  const sendMessage = async (customMessage?: string) => {
    const userMsg = customMessage || message;

    if (!userMsg.trim() || loading) return;

    setLoading(true);
    setMessage("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMsg },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      const showCTA = wantsToRegister(userMsg);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.reply,
          cta: showCTA,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "❌ Une erreur est survenue.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔘 Bouton */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-blue-700 transition"
          >
            🤖 <span>Besoin de l’IA</span>
          </button>
        </div>
      )}

      {/* 💬 Chat */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-gradient-to-br from-blue-900 to-sky-700 p-4 rounded-2xl shadow-xl border border-blue-400/30">

          <div className="flex justify-between mb-3">
            <h3 className="text-white font-semibold">Assistant spirituel</h3>
            <button className="text-white" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div ref={chatRef} className="h-60 overflow-y-auto space-y-3 pr-1">
            {messages.map((m, i) => (
              <div key={i}>
                <div className="text-xs text-blue-200">
                  {m.role === "user" ? "Toi" : "Guide"}
                </div>

                <div className="bg-white/10 backdrop-blur-md text-white p-2 rounded text-sm border border-white/10">
                  {m.content}

                  {m.cta && (
                    <a
                      href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
                      target="_blank"
                      className="block mt-2 bg-blue-600 p-2 text-center rounded hover:bg-blue-700 transition"
                    >
                      🎟 S’inscrire
                    </a>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-blue-200 animate-pulse">
                ✨ Une réponse se révèle...
              </div>
            )}
          </div>

          {/* Questions */}
          {messages.length <= 1 && (
            <div className="grid gap-2 mt-2">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="bg-white/10 text-white p-2 rounded text-sm hover:bg-blue-600 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="w-full mt-2 p-2 rounded text-black outline-none"
            placeholder="Écris ta question..."
          />

          <button
            onClick={() => sendMessage()}
            className="w-full mt-2 bg-blue-600 p-2 text-white rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </div>
      )}
    </>
  );
}
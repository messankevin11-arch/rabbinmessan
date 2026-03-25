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
    "✨ Qu’est-ce que l’âme divine ?",
    "🧘 Comment se connecter à son âme ?",
    "🔥 Comment dévoiler les richesses cachées dans son âme ?",
    "📅 Quelle est la date et le lieu de l’évènement ?",
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
            className="bg-purple-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2"
          >
            🤖 <span>Besoin de l’IA</span>
          </button>
        </div>
      )}

      {/* 💬 Chat */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-gradient-to-br from-zinc-900 to-purple-900 p-4 rounded-2xl shadow-xl">

          <div className="flex justify-between mb-3">
            <h3 className="text-white">Assistant spirituel</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div ref={chatRef} className="h-60 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div key={i}>
                <div className="text-xs text-gray-400">
                  {m.role === "user" ? "Toi" : "Guide"}
                </div>

                <div className="bg-zinc-800 text-white p-2 rounded text-sm">
                  {m.content}

                  {m.cta && (
                    <a
                      href="https://forms.gle/TLrMdkNxnTq9Z3Jg7"
                      target="_blank"
                      className="block mt-2 bg-purple-600 p-2 text-center rounded"
                    >
                      🎟 S’inscrire
                    </a>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 animate-pulse">
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
                  className="bg-zinc-800 text-white p-2 rounded text-sm hover:bg-purple-600"
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
            className="w-full mt-2 p-2 rounded text-black"
          />

          <button
            onClick={() => sendMessage()}
            className="w-full mt-2 bg-purple-600 p-2 text-white rounded"
          >
            Envoyer
          </button>
        </div>
      )}
    </>
  );
}
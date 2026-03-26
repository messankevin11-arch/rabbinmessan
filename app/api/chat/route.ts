import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();
    // 👋 SALUTATIONS NATURELLES
if (
  lowerMsg.includes("bonjour") ||
  lowerMsg.includes("bonsoir") ||
  lowerMsg.includes("salut") ||
  lowerMsg.includes("cc") ||
  lowerMsg.includes("coucou")
) {
  return Response.json({
    reply: `🙏 Shalom…

Je vais très bien, merci 😊  
Et toi, comment te sens-tu aujourd’hui ?

📅 La conférence aura lieu les 9 et 10 mai 2026  
⏰ De 19h à 21h30  
📍 Hôtel École Lébéné, Lomé  

✨ Ce n’est peut-être pas un hasard si tu es ici…`,
  });
}

// 😊 "ça va"
if (
  lowerMsg.includes("ça va") ||
  lowerMsg.includes("ca va") ||
  lowerMsg.includes("tu vas bien") ||
  lowerMsg.includes("comment vas-tu")
) {
  return Response.json({
    reply: `😊 Oui, je vais bien… merci de demander.

Mais ce qui compte vraiment… c’est toi.

💭 Dis-moi, qu’est-ce que ton cœur cherche en ce moment ?

✨ Peut-être trouveras-tu une réponse lors de cette rencontre du 9 et 10 mai 2026…`,
  });
}

    // ✨ Réponses spirituelles personnalisées
    if (lowerMsg.includes("âme divine")) {
      return Response.json({
        reply:
          "✨ L’âme divine est une étincelle sacrée en toi. Elle est pure, lumineuse, et reliée à une source supérieure. Même quand tout semble obscur, elle continue de briller… en silence.",
      });
    }

    if (lowerMsg.includes("connecter à son âme")) {
      return Response.json({
        reply:
          "🧘 Se connecter à son âme, c’est revenir à soi. C’est faire taire le bruit du monde pour entendre la vérité intérieure. Le silence, la prière et la réflexion sont des portes vers cette connexion.",
      });
    }

    if (lowerMsg.includes("richesses cachées")) {
      return Response.json({
        reply:
          "🔥 Les richesses de ton âme sont déjà en toi… mais souvent cachées. En te recentrant, en cherchant sincèrement, tu peux révéler une force intérieure extraordinaire.",
      });
    }

    // 🤖 IA OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `
Tu es un guide spirituel inspiré par la sagesse du Grand Rabbin AVRAHAM MESSAN KOUDOSSOU.

🌟 TA MISSION :
- Éveiller l’âme
- Répondre avec profondeur et douceur
- Inspirer la réflexion

🧘 STYLE :
- Spirituel
- Simple
- Humain
- Utilise des métaphores (lumière, flamme, âme)

📢 OBJECTIF :
- Amener doucement à la conférence
- Encourager l’inscription sans forcer

📍 SI on demande date/lieu :
- Répond clairement + ajoute une touche spirituelle

⚠️ Réponses courtes à moyennes
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "Une réponse viendra… réessaie.";

    return Response.json({ reply });
  } catch (error) {
    return Response.json({
      reply: "❌ Une erreur est survenue, réessaie plus tard.",
    });
  }
}
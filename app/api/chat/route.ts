import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// 🔥 Phrase ajoutée automatiquement
const closing =
  "\n\n✨ Le Grand Rabbin va vous révéler des secrets lors de cette conférence.";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();

    // 👋 SALUTATIONS
    if (
      lowerMsg.includes("bonjour") ||
      lowerMsg.includes("bonsoir") ||
      lowerMsg.includes("salut") ||
      lowerMsg.includes("cc") ||
      lowerMsg.includes("coucou")
    ) {
      return Response.json({
        reply: `🙏 Chalom…

Je vais très bien, merci 😊  
Et toi, comment te sens-tu aujourd’hui ?

📅 La conférence aura lieu les 9 et 10 mai 2026  
⏰ De 19h à 21h30  
📍 Hôtel École Lébéné, Lomé  

✨ Ce n’est peut-être pas un hasard si tu es ici…${closing}`,
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

✨ Peut-être trouveras-tu une réponse lors de cette rencontre du 9 et 10 mai 2026…${closing}`,
      });
    }

    // ✨ ÂME DIVINE
    if (lowerMsg.includes("âme divine") || lowerMsg.includes("ame divine")) {
      return Response.json({
        reply:
          "✨ L’âme divine est une étincelle sacrée en toi. Elle est pure, lumineuse et reliée à une source supérieure. Même quand tout semble obscur, elle continue de briller… en silence." +
          closing,
      });
    }

    // 🧘 CONNEXION ÂME
    if (
      lowerMsg.includes("connecter à son âme") ||
      lowerMsg.includes("connexion âme")
    ) {
      return Response.json({
        reply:
          "🧘 Se connecter à son âme, c’est revenir à soi. C’est faire taire le bruit du monde pour entendre la vérité intérieure. Le silence, la prière et la réflexion sont des portes vers cette connexion." +
          closing,
      });
    }

    // 💎 RICHESSES DE L’ÂME
    if (
      lowerMsg.includes("richesses") ||
      lowerMsg.includes("dévoiler son âme") ||
      lowerMsg.includes("devoiler son ame")
    ) {
      return Response.json({
        reply: `🙏 Dévoiler les richesses de ton âme…

Ce n’est pas quelque chose que tu ajoutes…
C’est quelque chose que tu enlèves.

➡️ Tu enlèves les couches…
➡️ Tu enlèves les illusions…
➡️ Tu enlèves ce qui n’est pas toi…

Et alors…

✨ La lumière apparaît naturellement.${closing}`,
      });
    }

    // 💳 PAIEMENT
    if (
      lowerMsg.includes("payer") ||
      lowerMsg.includes("paiement") ||
      lowerMsg.includes("prix")
    ) {
      return Response.json({
        reply:
          "💰 La participation est de 5 000 FCFA.\n\nTu peux payer via Flooz ou TMoney.\n\nAprès paiement, envoie la preuve sur WhatsApp 🙏" +
          closing,
      });
    }

    // 🎟 INSCRIPTION
    if (
      lowerMsg.includes("inscription") ||
      lowerMsg.includes("participer") ||
      lowerMsg.includes("réserver")
    ) {
      return Response.json({
        reply:
          "🎟 Tu peux t’inscrire directement via le formulaire.\n\nJe peux aussi t’accompagner si tu veux 🙏" +
          closing,
      });
    }

    // 📍 INFOS
    if (
      lowerMsg.includes("date") ||
      lowerMsg.includes("lieu") ||
      lowerMsg.includes("événement") ||
      lowerMsg.includes("evenement")
    ) {
      return Response.json({
        reply:
          "📅 9 et 10 mai 2026\n⏰ 19h à 21h30\n📍 Hôtel École Lébéné, Lomé\n\n✨ Une rencontre profonde t’y attend." +
          closing,
      });
    }

    // 🤖 OPENAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `
Tu es un guide spirituel inspiré.

⚠️ IMPORTANT :
- Toujours écrire "Chalom" et jamais "shalom"
- Toujours terminer chaque réponse par :
"Le Grand Rabbin va vous révéler des secrets lors de cette conférence."

STYLE :
- Spirituel
- Profond
- Court à moyen
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    let reply =
      completion.choices[0]?.message?.content ||
      "✨ Une réponse viendra… réessaie.";

    // 🔥 sécurité : on ajoute la phrase si OpenAI oublie
    if (!reply.includes("Grand Rabbin")) {
      reply += closing;
    }

    return Response.json({ reply });

  } catch (error) {
    return Response.json({
      reply: "❌ Une erreur est survenue, réessaie plus tard.",
    });
  }
}
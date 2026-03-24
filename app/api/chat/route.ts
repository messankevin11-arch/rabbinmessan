import { GoogleGenerativeAI } from "@google/generative-ai";

// Vérification clé API
if (!process.env.GEMINI_API_KEY) {
  throw new Error("Clé API manquante !");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("Message reçu:", message);

    const msg = message.toLowerCase();

    // ===============================
    // 🙏 RÉPONSES PRÉ-ENREGISTRÉES
    // ===============================

    // Salutation
    if (msg.includes("bonjour") || msg.includes("salut")) {
      return Response.json({
        reply: "🙏 Shalom et bienvenue à la conférence spirituelle du Grand Rabbin AVRAHAM MESSAN KOUDOUSSOUS. Comment puis-je vous aider ?",
      });
    }

    // Date
    if (msg.includes("date") || msg.includes("quand")) {
      return Response.json({
        reply: "📅 La conférence aura lieu les 9 et 10 Mai 2026 de 19H à 21H30.",
      });
    }

    // Heure
    if (msg.includes("heure")) {
      return Response.json({
        reply: "⏰ Les séances se déroulent de 19H à 21H30 chaque jour.",
      });
    }

    // Lieu
    if (msg.includes("lieu") || msg.includes("où")) {
      return Response.json({
        reply: "📍 La conférence se tiendra à l’Hôtel École Lébéné à Lomé.",
      });
    }

    // Objectif
    if (msg.includes("objectif") || msg.includes("but")) {
      return Response.json({
        reply: "✨ Cette conférence vise à transmettre des enseignements spirituels profonds pour inspirer, guider et transformer les vies.",
      });
    }

    // Programme
    if (msg.includes("programme")) {
      return Response.json({
        reply: "📖 Le programme comprend : enseignement spirituel, moments de prière et session de questions-réponses.",
      });
    }

    // Intervenant
    if (msg.includes("qui") || msg.includes("rabbin")) {
      return Response.json({
        reply: "🙏 Le Grand Rabbin AVRAHAM MESSAN KOUDOUSSOUS est un leader spirituel reconnu pour ses enseignements et son impact profond.",
      });
    }

    // Inscription (améliorée)
    if (
      msg.includes("inscription") ||
      msg.includes("réserver") ||
      msg.includes("participer") ||
      msg.includes("venir")
    ) {
      return Response.json({
        reply: "👇 Pour vous inscrire, veuillez appuyer sur le bouton 'S’inscrire' disponible sur la page. Nous serons ravis de vous accueillir 🙏",
      });
    }

    // Prix
    if (msg.includes("prix") || msg.includes("tarif")) {
      return Response.json({
        reply: "💰 L'accès à la conférence est gratuit (ou précisez si payant).",
      });
    }

    // Contact
    if (msg.includes("contact") || msg.includes("numéro")) {
      return Response.json({
        reply: "📱 Pour toute information, contactez : +228 XX XX XX XX",
      });
    }

    // ===============================
    // 🤖 GEMINI (fallback)
    // ===============================

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent([
      `
Tu es un assistant officiel d'une conférence spirituelle.

Informations importantes :
- Intervenant : Grand Rabbin AVRAHAM MESSAN KOUDOUSSOUS
- Date : 9 et 10 Mai 2026
- Heure : 19H à 21H30
- Lieu : Hôtel École Lébéné, Lomé

Règles :
- Réponds avec respect et sagesse
- Sois clair et court
- Encourage la participation
- Mets toujours le nom du rabbin en MAJUSCULE
`,
      message,
    ]);

    return Response.json({
      reply: result.response.text(),
    });

  } catch (error) {
    console.error("Erreur Gemini:", error);

    return Response.json({
      reply: "⚠️ Le service est momentanément indisponible. Merci de réessayer.",
    });
  }
}
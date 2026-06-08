const SesionService = require("./SesionService");
const GenAIConfig = require("../config/GenAIConfig");

class GenAIService {
  constructor() {
    this.sesionService = new SesionService();
    this.aiPromise = import("@google/genai").then(
      (mod) => new mod.GoogleGenAI({ apiKey: GenAIConfig.apiKey })
    );
    this.modelName = GenAIConfig.modelName;
  }

  async generateImage({ prompt, sesion_id, usuario_id }) {
    this.ai = this.ai || (await this.aiPromise);
    const response = await this.ai.models.generateContent({
      model: this.modelName,
      contents: prompt,
    });

    const candidate = response?.candidates?.[0];
    const parts = candidate?.content?.parts || [];
    const imagePart = parts.find((part) => part.inlineData?.data || part.inline_data?.data);
    const textPart = parts.find((part) => part.text);

    const imageBase64 =
      imagePart?.inlineData?.data || imagePart?.inline_data?.data || null;
    const mimeType =
      imagePart?.inlineData?.mimeType || imagePart?.inline_data?.mime_type || "image/png";
    const imageUrl = imageBase64 ? `data:${mimeType};base64,${imageBase64}` : null;
    const responseText = textPart?.text || "Imagen generada por Nano Banana";

    let session = null;
    if (sesion_id) {
      session = await this.sesionService.getSessionById(sesion_id);
    }

    if (!session) {
      if (!usuario_id) {
        throw new Error("usuario_id es requerido para crear la sesión");
      }
      session = await this.sesionService.createSession({
        usuario_id,
        titulo: "Chat de imágenes Nano Banana",
      });
    }

    await this.sesionService.addMessage(session.sesion_id, {
      remitente: "user",
      contenido: prompt,
      tipo: "text",
    });

    const assistantMessage = await this.sesionService.addMessage(session.sesion_id, {
      remitente: "assistant",
      contenido: responseText,
      tipo: imageUrl ? "image" : "text",
      imagen_url: imageUrl,
    });

    return {
      session,
      message: assistantMessage,
      imageUrl,
      responseText,
    };
  }
}

module.exports = GenAIService;

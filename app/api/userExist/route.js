import connectDB from "@/utils/db";
import UserModel from "@/models/user.model";

export default async function handler(req, res) {
  try {
    // Connectez-vous à la base de données
    await connectDB();

    // Utilisez req.body pour accéder au corps de la requête
    const siret = req.body;

    if (siret === undefined) {
      return res.status(400).json({
        message: "Bad Request: Le corps de la requête est manquant ou vide.",
      });
    }

    const siretExist = await UserModel.findOne({
      business_registration_number: siret.data.business_registration_number,
    }).select("business_registration_number");

    if (!siretExist) {
      console.log("Siret non trouvé");
      return res.status(404).json({
        message: "Siret non trouvé",
        result: false,
        siret_number: null,
      });
    } else {
      console.log("Siret trouvé");
      return res.status(200).json({
        message: "Siret déjà existant",
        result: true,
        siret_number: siretExist,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erreur interne du serveur",
      error: error.message,
    });
  }
}

import { verifyToken } from "../utils/auth";

export default function withAuth(handler) {
  return async (req, res) => {
    const token = req.cookies.jwt; // Assurez-vous que le nom du cookie correspond à celui que votre API Express renvoie

    if (!token) {
      // Si le cookie JWT n'est pas présent, redirigez vers la page de connexion
      return res.redirect("/login");
    }

    // Vérifiez le token
    const user = verifyToken(token);

    if (!user) {
      // Si le token est invalide, redirigez vers la page de connexion
      return res.redirect("/login");
    }

    // Attachez l'utilisateur à la requête pour qu'il soit disponible dans les composants Next.js
    req.user = user;

    // Passez au gestionnaire (handler) suivant ou à la page s'il n'y a pas de gestionnaire suivant
    if (handler) {
      return handler(req, res);
    }

    return null;
  };
}

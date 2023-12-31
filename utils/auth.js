import jwt from "jsonwebtoken";

const secretKey =
  "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5ceyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // Assurez-vous de conserver votre clé secrète en lieu sûr

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.user; // Le contenu du token que vous avez signé
  } catch (error) {
    return null; // Retourne null si le token n'est pas valide
  }
}

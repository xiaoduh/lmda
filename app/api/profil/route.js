import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const { profilId, subject, email, phone_number, context } =
    await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "therealbigdeeel@gmail.com",
        pass: "mmazhfocikkdkcsl",
      },
    });

    await transporter.sendMail({
      from: "no-reply lambda",
      to: "clement.lidar@gmail.com",
      subject: `Vous avez une nouvelle demande d'information pour le profil ${profilId} 🥳`,
      html: `<body>
          <p>Bonjour 👋,<br><br></p>
          <p>Vous avez une nouvelle demande d'information pour le profil ${profilId} :</p>
          <ul>
            <li>Objet: ${subject}</li>
            <li>Email du demandeur: ${email}</li>
            <li>Téléphone du demandeur: ${phone_number}</li>
            <li>Message du demandeur: ${context}</li>
          </ul>
          <p>Keep pushing ! 💪</p>
          </body>`,
    });

    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent" + err);
  }
}

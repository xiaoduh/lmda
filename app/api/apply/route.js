import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request) {
  const { jobID, name, subject, email, phone_number, motivation } =
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
      subject: `${name} candidate pour la mission ${jobID} 🥳`,
      html: `<body>
          <p>Bonjour 👋,<br><br></p>
          <p>Vous avez une nouvelle pour la mission ${jobID} :</p>
          <ul>
            <li>Objet: ${subject}</li>
            <li>Email du candidat: ${email}</li>
            <li>Téléphone du candidat: ${phone_number}</li>
            <li>Message du candidat: ${motivation}</li>
          </ul>
          <p>Keep pushing ! 💪</p>
          </body>`,
    });

    return NextResponse.json(
      { message: "email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "email Failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const { subject, email, phone, message } = await request.json();
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
      subject: "Vous avez une nouvelle candidature spontannée 🥳",
      html: `<body>
          <p>Bonjour 👋,<br><br></p>
          <p>Vous avez une nouvelle candidature spontannée :</p>
          <ul>
            <li>Objet: ${subject}</li>
            <li>Email du candidat: ${email}</li>
            <li>Téléphone du candidat: ${phone}</li>
            <li>Message du candidat: ${message}</li>
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

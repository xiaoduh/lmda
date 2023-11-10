import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request) {
  const { email } = await request.json();

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
      subject: "Nouvel abonné à votre liste de diffusion",
      html: `<body>
      <p>Bonjour 👋,<br><br></p>
      <p>Vous avez un nouvel abonné à votre liste de diffusion :</p>
      <p>${email}</p>
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

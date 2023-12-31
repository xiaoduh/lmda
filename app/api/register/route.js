import connectDB from "@/utils/db";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      professional_role,
      business_registration_number,
    } = await req.json();

    // Utiliser bcrypt pour générer un hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectDB();
    const user = await UserModel.create({
      first_name,
      last_name,
      email,
      password: hashedPassword, // Utiliser le mot de passe hashé dans le modèle
      professional_role,
      business_registration_number,
    });
    console.log(user);

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user",
      },
      { status: 500 }
    );
  }
}

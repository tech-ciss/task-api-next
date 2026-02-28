
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import { registerUser } from "@/services/user.service";

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, email, password } = await req.json();

  try {
    const data = await registerUser(name, email, password);
    return NextResponse.json(data, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ message: (error as Error).message }, { status: 400 });
  }
}

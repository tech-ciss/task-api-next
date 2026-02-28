
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/libs/db";
import { loginUser } from "@/services/user.service";

export async function POST(req: NextRequest) {
  await connectDB();
  const { email, password } = await req.json();

  try {
    const data = await loginUser(email, password);
    return NextResponse.json(data);
  } catch (error: unknown) {
    return NextResponse.json({ message: (error as Error).message }, { status: 400 });
  }
}

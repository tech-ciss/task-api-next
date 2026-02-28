
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getUserFromRequest = (req: NextRequest) => {
  const auth = req.headers.get("authorization");
  if (!auth) throw new Error("No token");

  const token = auth.split(" ")[1];
  if (!token) throw new Error("Invalid token");

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
  return decoded.id;
};

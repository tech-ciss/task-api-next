import jwt from "jsonwebtoken";

export const generateToken = (id: string) => {
  const expiresIn = process.env.JWT_EXPIRES_IN
    ? parseInt(process.env.JWT_EXPIRES_IN, 10)
    : undefined;

  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn,
  });
};

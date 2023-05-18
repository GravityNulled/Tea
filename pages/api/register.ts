import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../client";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | string>
) {
  if (req.method !== "POST") {
    res.status(405);
  }
  const { email, password, name } = req.body;
  const encryptedPass = await bcrypt.hash(password, 10);
  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (userExists) {
    return res.status(200).send("Email already exists");
  }
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: encryptedPass,
    },
  });
  res.status(200).json(user);
}

import { Router, Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import user from "../models/user";

const signUpRouter = Router();

signUpRouter.post("/api/sign-up", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ email, password: hashedPassword });

    const secret = process.env.JWT_SECRET as string;
    const token = jwt.sign(newUser._id, secret);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.status(201).json(newUser);
    return;
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
    return;
  }
});

export default signUpRouter;

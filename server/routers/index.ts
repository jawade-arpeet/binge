import { Router } from "express";

import signUpRouter from "./sign-up";

const router = Router();

router.use(signUpRouter);

export default router;

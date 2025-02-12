"use server";

import { signIn } from "@/lib/auth";

const authWithGoogle = async () => {
  await signIn("google");
};

export default authWithGoogle;

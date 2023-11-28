"use client";

import { signIn } from "next-auth/react";
import { MdOutlineAccountCircle } from "react-icons/md";

const SignInButton = () => {
  return (
    <button
      className="flex flex-row gap-1 items-center border-[1px] border-neutral-600 rounded-full overflow-hidden px-3 py-1.5 text-[#1EE5AF] cursor-pointer"
      onClick={() => signIn("google")}
    >
      <MdOutlineAccountCircle className="w-6 h-6" />
      Войти
    </button>
  );
};

export default SignInButton;

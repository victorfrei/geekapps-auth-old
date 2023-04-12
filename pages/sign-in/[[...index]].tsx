import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React, { useRef } from "react";

const SignInPage = () => {

  return (
    <div className="flex w-screen h-screen overflow-x-hidden justify-center items-center py-10 bg-zinc-800 filter">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};
export default SignInPage;

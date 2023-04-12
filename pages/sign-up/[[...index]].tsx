import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="flex w-screen h-screen overflow-x-hidden justify-center items-center py-10 bg-zinc-800 filter">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignUpPage;

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import Header from "components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-10 bg-zinc-800 filter">
      <SignedIn >
        <Header />
        <div className="flex gap-4 p-16 w-full h-full">
          <Link href='https://meet.geekapps.com.br' className="w-1/4 h-2/4 rounded-lg bg-gray-700 flex justify-center items-center text-white font-semibold text-lg">
            Meet
          </Link>
          <Link href='https://bots.geekapps.com.br' className="w-1/4 h-2/4 rounded-lg bg-gray-700 flex justify-center items-center text-white font-semibold text-lg">
            Bots
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <Header />
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Home;

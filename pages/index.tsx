import { SignInButton, SignOutButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import Header from "components/Header";

const Home = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-10 bg-zinc-800 filter">
      <SignedIn >
        <Header />
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <Header />
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Home;

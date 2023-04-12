import { SignInButton, SignOutButton, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-10 bg-zinc-800 filter">
      <SignedIn >
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default Home;

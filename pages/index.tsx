import { UserProfile } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-10 bg-zinc-800 filter">
      <UserProfile />
    </div>
  );
};

export default Home;

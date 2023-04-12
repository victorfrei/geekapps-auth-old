import { CreateOrganization, OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";
import Header from "components/Header";

const CreateOrganizationPage = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-20 bg-zinc-800 filter">

      <Header />

      <CreateOrganization />
    </div>
  );
};

export default CreateOrganizationPage;

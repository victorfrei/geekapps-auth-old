import { CreateOrganization } from "@clerk/clerk-react";

const CreateOrganizationPage = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center py-10 bg-zinc-800 filter">
      <CreateOrganization />
    </div>
  );
};

export default CreateOrganizationPage;

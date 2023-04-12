import { CreateOrganization, OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";

const Header = () => {
    return (
        <header className="dark fixed z-50 w-full top-0 right-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-zinc-700">
                <div className="flex flex-wrap justify-between items-center">
                    <OrganizationSwitcher />
                    <UserButton />
                </div>
            </nav>
        </header>
    );
};

export default Header;

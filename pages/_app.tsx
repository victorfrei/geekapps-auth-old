import type { AppProps } from "next/app";
import "../public/css/tailwind.css";
import { dark } from "@clerk/themes";
import { ptBR } from "@clerk/localizations";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  MultisessionAppSupport,
  SignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

const publicPages: Array<string> = [
  "/sign-in/[[...index]]",
  "/sign-up/[[...index]]",
];

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider
      {...pageProps}
      localization={ptBR}
      appearance={{
        baseTheme: dark,
        layout: {
          helpPageUrl: "mailto:support@geekapps.com.br",
          logoPlacement: "inside",
          privacyPageUrl: "https://clerk.dev/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: "top",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "https://clerk.dev/terms",
        },
        variables: {
          colorPrimary: "gray",
          colorDanger: "red",
          colorSuccess: "green",
          colorTextOnPrimaryBackground: "black",
          colorTextSecondary: "gray",
          colorText: "white",
        },
      }}
    >
      <MultisessionAppSupport>
        {isPublicPage ? (
          <Component {...pageProps} />
        ) : (
          <>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        )}
      </MultisessionAppSupport>
    </ClerkProvider>
  );
}

export default MyApp;

import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { LoginScreen } from "../components/LoginScreen";
import { Theme } from "@components/Theme";
import { Navbar } from "@components/Navbar";
import { ReactQueryProvider } from "../providers/react-query";
import type { AppType } from "next/app";
import type { Session } from "next-auth";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <>
      <Head>
        <title>D&D Compendium</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <ReactQueryProvider>
        <SessionProvider session={session}>
          <Theme>
            <LoginScreen>
              <Navbar />
              <Component {...pageProps} />
            </LoginScreen>
          </Theme>
        </SessionProvider>
      </ReactQueryProvider>
    </>
  );
};

export default MyApp;

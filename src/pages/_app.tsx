import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LoginScreen } from "../components/LoginScreen";
import { Theme } from "@components/Theme";
import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "@components/Navbar";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <>
            <Head>
                <title>D&D Compendium - Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/images/favicon.png" />
            </Head>
            <SessionProvider session={session}>
                <Theme>
                    <LoginScreen>
                        <Navbar />
                        <Component {...pageProps} />
                    </LoginScreen>
                </Theme>
            </SessionProvider>
        </>
    );
};

export default MyApp;

import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { LoginScreen } from "../components/LoginScreen";
import { signOut } from "next-auth/react";
import { Button } from "@components/Button";
import { Theme } from "@components/Theme";
import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <>
            <Head>
                <title>D&D Compendium - Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <SessionProvider session={session}>
                <Theme>
                    <LoginScreen>
                        <Button onClick={() => void signOut()}>Sign out</Button>
                        <Component {...pageProps} />
                    </LoginScreen>
                </Theme>
            </SessionProvider>
        </>
    );
};

export default MyApp;

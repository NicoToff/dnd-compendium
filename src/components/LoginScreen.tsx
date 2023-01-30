import { useSession, signIn } from "next-auth/react";
import { Button } from "./Button";

const discord = (
    <svg className="mr-2 ml-2 h-5 w-6 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
        <g id="discord-logo" data-name="discord-logo-name">
            <g id="Discord_Logos" data-name="Discord Logos">
                <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </g>
            </g>
        </g>
    </svg>
);

export function LoginScreen({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    if (session) {
        return <>{children}</>;
    } else if (status === "loading") {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="flex h-screen">
                <div className="container m-auto max-w-lg px-4 text-center ">
                    <div className="rounded bg-gray-200 p-10 pt-5 dark:bg-gray-800">
                        <h1 className="p-4 text-3xl lg:text-4xl">Greetings, traveler!</h1>
                        <p className="mt-1 mb-4">Login, if you dare.</p>
                        <Button intent={"primary"} fullWidth onClick={() => void signIn("discord")}>
                            {`Sign in with Discord`} {discord}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
/* `flex h-screen` Allows to vertical align with a `m-auto` in children */

import { type NextPage } from "next";
import Head from "next/head";
import { Typography } from "@components/Typography";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>D&D Snogard Compendium</title>
        <meta name="description" content="A D&D compendium for the Snogard folks." />
      </Head>
      <main>
        <Typography intent={"titleMain"}>Chapter 1: Making a website</Typography>
        <Typography intent={"titleSecondary"}>Racial Traits</Typography>
        <Typography intent={"titleTertiary"}>Ability Score Increase</Typography>
        <Typography>{`Every race increases one or more of a character's ability scores.`}</Typography>
      </main>
    </>
  );
};

export default Login;

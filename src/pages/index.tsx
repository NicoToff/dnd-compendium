import { type NextPage } from "next";
import Head from "next/head";
import { Typography } from "@components/Typography";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["react-query"], () =>
    fetch("https://www.dnd5eapi.co/api/spells/?level=0").then((d) => d.json())
  );
  if (isLoading) return <div>Loading...</div>;
  if (data) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>D&D Snogard Compendium</title>
        <meta name="description" content="A D&D compendium for the Snogard folks." />
      </Head>
      <main>Test</main>
    </>
  );
};

export default Home;

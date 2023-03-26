import { type NextPage } from "next";
import Head from "next/head";
import { Typography } from "@components/Typography";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery<Spell[] | undefined>(["allCantrips"], async () => {
    const res = await fetch("https://www.dnd5eapi.co/api/spells/?level=0");
    const list = (await res.json()) as SpellApiRes | undefined;
    if (!list) return;
    const allPromises = list.results.map((spell) => fetch("https://www.dnd5eapi.co" + spell.url));
    const allRes = await Promise.all(allPromises);
    return await Promise.all(allRes.map((res) => res.json() as Promise<Spell>));
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>D&D Snogard Compendium</title>
        <meta name="description" content="A D&D compendium for the Snogard folks." />
      </Head>
      <main>
        <Typography htmlTag={"h1"} intent="titleMain">
          Spells
        </Typography>
        <ul>
          {data?.map((spell) => (
            <li key={spell.index}>
              <Typography intent="titleTertiary" className="border-b">
                {spell.name}
              </Typography>
              <Typography intent="text-italic">{`Level ${spell.level}${spell.ritual ? " (ritual)" : ""}`}</Typography>
              {spell.desc.map((desc) => (
                <Typography key={desc}>{desc}</Typography>
              ))}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;

export type SpellPath = {
  index: string;
  name: string;
  url: string;
};

export type SpellApiRes = {
  count: number;
  results: SpellPath[];
};
export type Spell = {
  higher_level: string[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  damage: {
    damage_type: {
      index: string;
      name: string;
      url: string;
    };
    damage_at_character_level: {
      [key: string]: string;
    };
  };
  dc: {
    dc_type: {
      index: string;
      name: string;
      url: string;
    };
    dc_success: string;
  };
  school: {
    index: string;
    name: string;
    url: string;
  };
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
};

const spell: Spell = {
  higher_level: [],
  index: "acid-splash",
  name: "Acid Splash",
  desc: [
    "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
    "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
  ],
  range: "60 feet",
  components: ["V", "S"],
  ritual: false,
  duration: "Instantaneous",
  concentration: false,
  casting_time: "1 action",
  level: 0,
  damage: {
    damage_type: { index: "acid", name: "Acid", url: "/api/damage-types/acid" },
    damage_at_character_level: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" },
  },
  dc: { dc_type: { index: "dex", name: "DEX", url: "/api/ability-scores/dex" }, dc_success: "none" },
  school: { index: "conjuration", name: "Conjuration", url: "/api/magic-schools/conjuration" },
  classes: [
    { index: "sorcerer", name: "Sorcerer", url: "/api/classes/sorcerer" },
    { index: "wizard", name: "Wizard", url: "/api/classes/wizard" },
  ],
  subclasses: [{ index: "lore", name: "Lore", url: "/api/subclasses/lore" }],
  url: "/api/spells/acid-splash",
};

import { typesenseInstantSearchClient } from "~/clients/typesense-search";
import { Typography } from "~/components/ui/typography";
import type { The5ESRDSpells as SpellSrdType } from "../../../../libs/types";

import {
  InstantSearch,
  SortBy,
  Pagination,
  ClearRefinements,
  Hits,
  HitsPerPage, // TODO: Check https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-plugin-recent-searches/createLocalStorageRecentSearchesPlugin/
  Configure,
  SearchBox,
} from "react-instantsearch-dom";
import React from "react";

export function SpellSearch() {
  return (
    <>
      <Typography intent={"title-main"}>Spell Search</Typography>
      <InstantSearch
        indexName="5e-srd-spells"
        searchClient={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          typesenseInstantSearchClient
        }
      >
        <Configure
          attributesToSnippet={["asc:10"]}
          snippetEllipsisText="…"
          removeWordsIfNoResults="allOptional"
        />
        <SearchBox />
        <Hits hitComponent={SpellHit} />
      </InstantSearch>
    </>
  );
}

function SpellHit({ hit: spell }: { hit: SpellSrdType }) {
  return (
    <>
      <Typography className="text-red-700" intent={"title-tertiary"}>
        {spell.name}
      </Typography>
      <Typography intent={"text-italic"}>
        {`${spellLevel(spell.level)} ${spell.school.name.toLowerCase()}${
          spell.ritual ? " (ritual)" : ""
        }`}
      </Typography>
      <ul className="my-2">
        <Line head="Casting Time: " tail={spell.casting_time} />
        <Line head="Range: " tail={spell.range} />
        <Line
          head="Components: "
          tail={`${spell.components.join(", ")}${
            spell.material ? ` (${spell.material?.toLowerCase()})` : ""
          }`}
        />
        <Line head="Duration: " tail={spell.duration} />
      </ul>
      <div>
        {spell.desc.map((desc, i) => (
          <Typography
            intent={"text"}
            className="indent-4 first:indent-0"
            key={i}
          >
            {desc}
          </Typography>
        ))}
      </div>
      {spell.higher_level?.length ||
      spell.classes.length ||
      spell.subclasses.length ? (
        <ul className="mt-2">
          {spell.higher_level?.length ? (
            <Line head="At Higher Levels: " tail={spell.higher_level} />
          ) : null}
          {spell.classes.length ? (
            <Line
              head="Classes: "
              tail={spell.classes.map((cla) => cla.name)}
            />
          ) : null}
          {spell.subclasses.length ? (
            <Line
              head="Subclasses: "
              tail={spell.subclasses.map((sub) => sub.name)}
            />
          ) : null}
          {/* {spell.damage ? (
          <Line
              head="Damage: "
              tail={`${spell.damage.damage_at_character_level} ${spell.damage.damage_type.name.toLowerCase()}${
                spell.damage.damage_at_slot_level
                  ? ` (${spell.damage.damage_at_slot_level})`
                  : ""
              }`}
        } */}
        </ul>
      ) : null}
    </>
  );
}

function spellLevel(level: number) {
  // prettier-ignore
  switch (level) {
    case 0:  return "Cantrip";
    case 1:  return "1st-level";
    case 2:  return "2nd-level";
    case 3:  return "3rd-level";
    default: return `${level}th-level`;
  }
}

function Line({
  head,
  tail,
  ...props
}: {
  head: string;
  tail: string | string[];
}) {
  const tailToPrint = Array.isArray(tail) ? tail.join(", ") : tail;
  return (
    <li className="-mb-1.5 last:mb-0" {...props}>
      <Typography intent={"text-bold"} htmlTag="span">
        {head}
      </Typography>
      <Typography intent={"text"} htmlTag="span">
        {tailToPrint}
      </Typography>
    </li>
  );
}

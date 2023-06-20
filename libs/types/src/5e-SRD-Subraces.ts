export type The5ESRDSubraces = {
    index:                 string;
    name:                  string;
    race:                  Race;
    desc:                  string;
    abilityBonuses:        AbilityBonus[];
    startingProficiencies: Race[];
    languages:             any[];
    racialTraits:          Race[];
    url:                   string;
    languageOptions?:      LanguageOptions;
}

export type AbilityBonus = {
    abilityScore: Race;
    bonus:        number;
}

export type Race = {
    index: string;
    name:  string;
    url:   string;
}

export type LanguageOptions = {
    choose: number;
    from:   From;
    type:   string;
}

export type From = {
    optionSetType: string;
    options:       Option[];
}

export type Option = {
    optionType: OptionType;
    item:       Race;
}

export type OptionType = "reference";

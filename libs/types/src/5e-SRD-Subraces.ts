export type The5ESRDSubraces = {
    index:                  string;
    name:                   string;
    race:                   Race;
    desc:                   string;
    ability_bonuses:        AbilityBonus[];
    starting_proficiencies: Race[];
    languages:              any[];
    racial_traits:          Race[];
    url:                    string;
    language_options?:      LanguageOptions;
}

export type AbilityBonus = {
    ability_score: Race;
    bonus:         number;
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
    option_set_type: string;
    options:         Option[];
}

export type Option = {
    option_type: OptionType;
    item:        Race;
}

export type OptionType = "reference";

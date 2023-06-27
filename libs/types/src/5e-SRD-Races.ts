export type The5ESRDRaces = {
    index:                         string;
    name:                          string;
    speed:                         number;
    ability_bonuses:               AbilityBonus[];
    alignment:                     string;
    age:                           string;
    size:                          string;
    size_description:              string;
    starting_proficiencies:        Language[];
    starting_proficiency_options?: Options;
    languages:                     Language[];
    language_desc:                 string;
    traits:                        Language[];
    subraces:                      Language[];
    url:                           string;
    language_options?:             Options;
    ability_bonus_options?:        AbilityBonusOptions;
}

export type AbilityBonusOptions = {
    choose: number;
    type:   string;
    from:   AbilityBonusOptionsFrom;
}

export type AbilityBonusOptionsFrom = {
    option_set_type: string;
    options:         PurpleOption[];
}

export type PurpleOption = {
    option_type:   string;
    ability_score: Language;
    bonus:         number;
}

export type Language = {
    index: string;
    name:  string;
    url:   string;
}

export type AbilityBonus = {
    ability_score: Language;
    bonus:         number;
}

export type Options = {
    choose: number;
    type:   string;
    from:   LanguageOptionsFrom;
    desc?:  string;
}

export type LanguageOptionsFrom = {
    option_set_type: string;
    options:         FluffyOption[];
}

export type FluffyOption = {
    option_type: OptionType;
    item:        Language;
}

export type OptionType = "reference";

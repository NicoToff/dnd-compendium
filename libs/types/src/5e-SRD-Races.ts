export type The5ESRDRaces = {
    index:                       string;
    name:                        string;
    speed:                       number;
    abilityBonuses:              AbilityBonus[];
    alignment:                   string;
    age:                         string;
    size:                        string;
    sizeDescription:             string;
    startingProficiencies:       Language[];
    startingProficiencyOptions?: Options;
    languages:                   Language[];
    languageDesc:                string;
    traits:                      Language[];
    subraces:                    Language[];
    url:                         string;
    languageOptions?:            Options;
    abilityBonusOptions?:        AbilityBonusOptions;
}

export type AbilityBonusOptions = {
    choose: number;
    type:   string;
    from:   AbilityBonusOptionsFrom;
}

export type AbilityBonusOptionsFrom = {
    optionSetType: string;
    options:       PurpleOption[];
}

export type PurpleOption = {
    optionType:   string;
    abilityScore: Language;
    bonus:        number;
}

export type Language = {
    index: string;
    name:  string;
    url:   string;
}

export type AbilityBonus = {
    abilityScore: Language;
    bonus:        number;
}

export type Options = {
    choose: number;
    type:   string;
    from:   LanguageOptionsFrom;
    desc?:  string;
}

export type LanguageOptionsFrom = {
    optionSetType: string;
    options:       FluffyOption[];
}

export type FluffyOption = {
    optionType: OptionType;
    item:       Language;
}

export type OptionType = "reference";

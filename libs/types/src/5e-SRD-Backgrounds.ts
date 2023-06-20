export type The5ESRDBackgrounds = {
    index:                    string;
    name:                     string;
    startingProficiencies:    StartingProficiency[];
    languageOptions:          LanguageOptions;
    startingEquipment:        StartingEquipment[];
    startingEquipmentOptions: StartingEquipmentOption[];
    feature:                  Feature;
    personalityTraits:        Bonds;
    ideals:                   Ideals;
    bonds:                    Bonds;
    flaws:                    Bonds;
    url:                      string;
}

export type Bonds = {
    choose: number;
    type:   string;
    from:   BondsFrom;
}

export type BondsFrom = {
    optionSetType: string;
    options:       PurpleOption[];
}

export type PurpleOption = {
    optionType: OptionType;
    string:     string;
}

export type OptionType = "string";

export type Feature = {
    name: string;
    desc: string[];
}

export type Ideals = {
    choose: number;
    type:   string;
    from:   IdealsFrom;
}

export type IdealsFrom = {
    optionSetType: string;
    options:       FluffyOption[];
}

export type FluffyOption = {
    optionType: string;
    desc:       string;
    alignments: StartingProficiency[];
}

export type StartingProficiency = {
    index: string;
    name:  string;
    url:   string;
}

export type LanguageOptions = {
    choose: number;
    type:   string;
    from:   LanguageOptionsFrom;
}

export type LanguageOptionsFrom = {
    optionSetType:   string;
    resourceListURL: string;
}

export type StartingEquipment = {
    equipment: StartingProficiency;
    quantity:  number;
}

export type StartingEquipmentOption = {
    choose: number;
    type:   string;
    from:   StartingEquipmentOptionFrom;
}

export type StartingEquipmentOptionFrom = {
    optionSetType:     string;
    equipmentCategory: StartingProficiency;
}

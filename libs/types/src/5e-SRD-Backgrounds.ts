export type The5ESRDBackgrounds = {
    index:                      string;
    name:                       string;
    starting_proficiencies:     StartingProficiency[];
    language_options:           LanguageOptions;
    starting_equipment:         StartingEquipment[];
    starting_equipment_options: StartingEquipmentOption[];
    feature:                    Feature;
    personality_traits:         Bonds;
    ideals:                     Ideals;
    bonds:                      Bonds;
    flaws:                      Bonds;
    url:                        string;
}

export type Bonds = {
    choose: number;
    type:   string;
    from:   BondsFrom;
}

export type BondsFrom = {
    option_set_type: string;
    options:         PurpleOption[];
}

export type PurpleOption = {
    option_type: OptionType;
    string:      string;
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
    option_set_type: string;
    options:         FluffyOption[];
}

export type FluffyOption = {
    option_type: string;
    desc:        string;
    alignments:  StartingProficiency[];
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
    option_set_type:   string;
    resource_list_url: string;
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
    option_set_type:    string;
    equipment_category: StartingProficiency;
}

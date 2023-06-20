export type The5ESRDClasses = {
    index:                    string;
    name:                     string;
    hitDie:                   number;
    proficiencyChoices:       ProficiencyChoice[];
    proficiencies:            Proficiency[];
    savingThrows:             Proficiency[];
    startingEquipment:        StartingEquipment[];
    startingEquipmentOptions: StartingEquipmentOption[];
    classLevels:              string;
    multiClassing:            MultiClassing;
    subclasses:               Proficiency[];
    url:                      string;
    spellcasting?:            Spellcasting;
    spells?:                  string;
}

export type MultiClassing = {
    prerequisites?:       MultiClassingPrerequisite[];
    proficiencies:        Proficiency[];
    proficiencyChoices?:  ProficiencyChoiceElement[];
    prerequisiteOptions?: PrerequisiteOptions;
}

export type PrerequisiteOptions = {
    type:   string;
    choose: number;
    from:   PrerequisiteOptionsFrom;
}

export type PrerequisiteOptionsFrom = {
    optionSetType: OptionSetType;
    options:       PurpleOption[];
}

export type OptionSetType = "options_array" | "equipment_category";

export type PurpleOption = {
    optionType:   string;
    abilityScore: Proficiency;
    minimumScore: number;
}

export type Proficiency = {
    index: string;
    name:  string;
    url:   string;
}

export type MultiClassingPrerequisite = {
    abilityScore: Proficiency;
    minimumScore: number;
}

export type ProficiencyChoiceElement = {
    desc?:  string;
    choose: number;
    type:   ProficiencyChoiceType;
    from:   PurpleFrom;
}

export type PurpleFrom = {
    optionSetType: OptionSetType;
    options:       FluffyOption[];
}

export type FluffyOption = {
    optionType: PurpleOptionType;
    item:       Proficiency;
}

export type PurpleOptionType = "reference" | "choice";

export type ProficiencyChoiceType = "proficiencies";

export type ProficiencyChoice = {
    desc:   string;
    choose: number;
    type:   ProficiencyChoiceType;
    from:   FluffyFrom;
}

export type FluffyFrom = {
    optionSetType: OptionSetType;
    options:       TentacledOption[];
}

export type TentacledOption = {
    optionType: PurpleOptionType;
    item?:      Proficiency;
    choice?:    ProficiencyChoiceElement;
}

export type Spellcasting = {
    level:               number;
    spellcastingAbility: Proficiency;
    info:                Info[];
}

export type Info = {
    name: string;
    desc: string[];
}

export type StartingEquipment = {
    equipment: Proficiency;
    quantity:  number;
}

export type StartingEquipmentOption = {
    desc:   string;
    choose: number;
    type:   StartingEquipmentOptionType;
    from:   StartingEquipmentOptionFrom;
}

export type StartingEquipmentOptionFrom = {
    optionSetType:      OptionSetType;
    options?:           StickyOption[];
    equipmentCategory?: Proficiency;
}

export type StickyOption = {
    optionType:     ItemOptionType;
    count?:         number;
    of?:            Proficiency;
    choice?:        ItemChoice;
    prerequisites?: OptionPrerequisite[];
    items?:         Item[];
}

export type ItemChoice = {
    desc:   string;
    choose: number;
    type:   StartingEquipmentOptionType;
    from:   TentacledFrom;
}

export type TentacledFrom = {
    optionSetType:     OptionSetType;
    equipmentCategory: Proficiency;
}

export type StartingEquipmentOptionType = "equipment";

export type Item = {
    optionType: ItemOptionType;
    count?:     number;
    of?:        Proficiency;
    choice?:    ItemChoice;
}

export type ItemOptionType = "counted_reference" | "choice" | "multiple";

export type OptionPrerequisite = {
    type:        string;
    proficiency: Proficiency;
}

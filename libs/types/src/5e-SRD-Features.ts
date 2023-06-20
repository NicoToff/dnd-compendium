export type The5ESRDFeatures = {
    index:            string;
    class:            Class;
    name:             string;
    level:            number;
    prerequisites:    Prerequisite[];
    desc:             string[];
    url:              string;
    subclass?:        Class;
    reference?:       string;
    featureSpecific?: FeatureSpecific;
    parent?:          Class;
}

export type Class = {
    index: string;
    name:  string;
    url:   string;
}

export type FeatureSpecific = {
    expertiseOptions?:  ExpertiseOptions;
    subfeatureOptions?: SubfeatureOptions;
    invocations?:       Class[];
}

export type ExpertiseOptions = {
    choose: number;
    type:   SubfeatureOptionsType;
    from:   ExpertiseOptionsFrom;
}

export type ExpertiseOptionsFrom = {
    optionSetType: OptionSetType;
    options:       ItemElement[];
}

export type OptionSetType = "options_array";

export type ItemElement = {
    optionType: OptionType;
    item?:      Class;
    choice?:    SubfeatureOptions;
    items?:     ItemElement[];
}

export type SubfeatureOptions = {
    choose: number;
    type:   SubfeatureOptionsType;
    from:   SubfeatureOptionsFrom;
}

export type SubfeatureOptionsFrom = {
    optionSetType: OptionSetType;
    options:       PurpleOption[];
}

export type PurpleOption = {
    optionType: OptionType;
    item:       Class;
}

export type OptionType = "reference" | "choice" | "multiple";

export type SubfeatureOptionsType = "proficiency" | "feature";

export type Prerequisite = {
    type:     PrerequisiteType;
    spell?:   string;
    feature?: string;
    level?:   number;
}

export type PrerequisiteType = "spell" | "feature" | "level";

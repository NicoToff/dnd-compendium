export type The5ESRDFeatures = {
    index:             string;
    class:             Class;
    name:              string;
    level:             number;
    prerequisites:     Prerequisite[];
    desc:              string[];
    url:               string;
    subclass?:         Class;
    reference?:        string;
    feature_specific?: FeatureSpecific;
    parent?:           Class;
}

export type Class = {
    index: string;
    name:  string;
    url:   string;
}

export type FeatureSpecific = {
    expertise_options?:  ExpertiseOptions;
    subfeature_options?: SubfeatureOptions;
    invocations?:        Class[];
}

export type ExpertiseOptions = {
    choose: number;
    type:   SubfeatureOptionsType;
    from:   ExpertiseOptionsFrom;
}

export type ExpertiseOptionsFrom = {
    option_set_type: OptionSetType;
    options:         ItemElement[];
}

export type OptionSetType = "options_array";

export type ItemElement = {
    option_type: OptionType;
    item?:       Class;
    choice?:     SubfeatureOptions;
    items?:      ItemElement[];
}

export type SubfeatureOptions = {
    choose: number;
    type:   SubfeatureOptionsType;
    from:   SubfeatureOptionsFrom;
}

export type SubfeatureOptionsFrom = {
    option_set_type: OptionSetType;
    options:         PurpleOption[];
}

export type PurpleOption = {
    option_type: OptionType;
    item:        Class;
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

export type The5ESRDTraits = {
    index:                string;
    races:                Parent[];
    subraces:             Parent[];
    name:                 string;
    desc:                 string[];
    proficiencies:        Parent[];
    url:                  string;
    proficiency_choices?: LanguageOptions;
    trait_specific?:      TraitSpecific;
    language_options?:    LanguageOptions;
    parent?:              Parent;
}

export type LanguageOptions = {
    choose: number;
    type:   string;
    from:   From;
}

export type From = {
    option_set_type: string;
    options:         Option[];
}

export type Option = {
    option_type: OptionType;
    item:        Parent;
}

export type Parent = {
    index: string;
    name:  string;
    url:   string;
}

export type OptionType = "reference";

export type TraitSpecific = {
    spell_options?:    LanguageOptions;
    subtrait_options?: LanguageOptions;
    damage_type?:      Parent;
    breath_weapon?:    BreathWeapon;
}

export type BreathWeapon = {
    name:           Name;
    desc:           string;
    area_of_effect: AreaOfEffect;
    usage:          Usage;
    dc:             Dc;
    damage:         Damage[];
}

export type AreaOfEffect = {
    size: number;
    type: AreaOfEffectType;
}

export type AreaOfEffectType = "line" | "cone";

export type Damage = {
    damage_type:               Parent;
    damage_at_character_level: { [key: string]: DamageAtCharacterLevel };
}

export type DamageAtCharacterLevel = "2d6" | "3d6" | "4d6" | "5d6";

export type Dc = {
    dc_type:      Parent;
    success_type: SuccessType;
}

export type SuccessType = "half";

export type Name = "Breath Weapon";

export type Usage = {
    type:  UsageType;
    times: number;
}

export type UsageType = "per rest";

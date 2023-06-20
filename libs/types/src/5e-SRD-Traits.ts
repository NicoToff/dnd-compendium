export type The5ESRDTraits = {
    index:               string;
    races:               Parent[];
    subraces:            Parent[];
    name:                string;
    desc:                string[];
    proficiencies:       Parent[];
    url:                 string;
    proficiencyChoices?: LanguageOptions;
    traitSpecific?:      TraitSpecific;
    languageOptions?:    LanguageOptions;
    parent?:             Parent;
}

export type LanguageOptions = {
    choose: number;
    type:   string;
    from:   From;
}

export type From = {
    optionSetType: string;
    options:       Option[];
}

export type Option = {
    optionType: OptionType;
    item:       Parent;
}

export type Parent = {
    index: string;
    name:  string;
    url:   string;
}

export type OptionType = "reference";

export type TraitSpecific = {
    spellOptions?:    LanguageOptions;
    subtraitOptions?: LanguageOptions;
    damageType?:      Parent;
    breathWeapon?:    BreathWeapon;
}

export type BreathWeapon = {
    name:         Name;
    desc:         string;
    areaOfEffect: AreaOfEffect;
    usage:        Usage;
    dc:           Dc;
    damage:       Damage[];
}

export type AreaOfEffect = {
    size: number;
    type: AreaOfEffectType;
}

export type AreaOfEffectType = "line" | "cone";

export type Damage = {
    damageType:             Parent;
    damageAtCharacterLevel: { [key: string]: DamageAtCharacterLevel };
}

export type DamageAtCharacterLevel = "2d6" | "3d6" | "4d6" | "5d6";

export type Dc = {
    dcType:      Parent;
    successType: SuccessType;
}

export type SuccessType = "half";

export type Name = "Breath Weapon";

export type Usage = {
    type:  UsageType;
    times: number;
}

export type UsageType = "per rest";

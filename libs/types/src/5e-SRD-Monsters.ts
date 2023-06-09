export type The5ESRDMonsters = {
    index:                  string;
    name:                   string;
    size:                   Size;
    type:                   The5ESRDMonsterType;
    alignment:              Alignment;
    armor_class:            ArmorClass[];
    hit_points:             number;
    hit_dice:               string;
    hit_points_roll:        string;
    speed:                  Speed;
    strength:               number;
    dexterity:              number;
    constitution:           number;
    intelligence:           number;
    wisdom:                 number;
    charisma:               number;
    proficiencies:          Proficiency[];
    damage_vulnerabilities: string[];
    damage_resistances:     string[];
    damage_immunities:      string[];
    condition_immunities:   ConditionImmunity[];
    senses:                 Senses;
    languages:              string;
    challenge_rating:       number;
    xp:                     number;
    special_abilities?:     SpecialAbility[];
    actions?:               The5ESRDMonsterAction[];
    legendary_actions?:     LegendaryAction[];
    image?:                 string;
    url:                    string;
    desc?:                  string;
    subtype?:               string;
    reactions?:             Reaction[];
    images?:                string;
    forms?:                 ConditionImmunity[];
}

export type The5ESRDMonsterAction = {
    name:              string;
    multiattack_type?: MultiattackType;
    desc:              string;
    actions?:          ActionAction[];
    attack_bonus?:     number;
    dc?:               Dc;
    damage?:           ActionDamage[];
    usage?:            ActionUsage;
    options?:          Options;
    attacks?:          Attack[];
    action_options?:   ActionOptions;
}

export type ActionOptions = {
    choose: number;
    type:   ItemOptionType;
    from:   ActionOptionsFrom;
}

export type ActionOptionsFrom = {
    option_set_type: OptionSetType;
    options:         ItemElement[];
}

export type OptionSetType = "options_array";

export type ItemElement = {
    option_type:  ItemOptionType;
    items?:       ItemElement[];
    action_name?: string;
    count?:       number;
    type?:        ActionType;
    desc?:        string;
}

export type ItemOptionType = "multiple" | "action";

export type ActionType = "ranged" | "melee" | "ability" | "magic";

export type ActionAction = {
    action_name: string;
    count:       number | string;
    type:        ActionType;
}

export type Attack = {
    name:         string;
    dc:           Dc;
    damage?:      AttackDamage[];
    option_type?: OptionType;
}

export type AttackDamage = {
    damage_type: ConditionImmunity;
    damage_dice: string;
}

export type ConditionImmunity = {
    index: string;
    name:  string;
    url:   string;
}

export type Dc = {
    dc_type:      ConditionImmunity;
    dc_value:     number;
    success_type: SuccessType;
}

export type SuccessType = "none" | "half";

export type OptionType = "breath";

export type ActionDamage = {
    damage_type?: ConditionImmunity;
    damage_dice?: string;
    dc?:          Dc;
    choose?:      number;
    type?:        DamageType;
    from?:        DamageFrom;
}

export type DamageFrom = {
    option_set_type: OptionSetType;
    options:         PurpleOption[];
}

export type PurpleOption = {
    option_type: DamageType;
    damage_type: ConditionImmunity;
    damage_dice: string;
    notes?:      Notes;
}

export type Notes = "One handed" | "Two handed" | "With shillelagh";

export type DamageType = "damage";

export type MultiattackType = "actions" | "action_options";

export type Options = {
    choose: number;
    type:   OptionsType;
    from:   OptionsFrom;
}

export type OptionsFrom = {
    option_set_type: OptionSetType;
    options:         Attack[];
}

export type OptionsType = "attack";

export type ActionUsage = {
    type:        PurpleType;
    times?:      number;
    dice?:       Dice;
    min_value?:  number;
    rest_types?: RESTType[];
}

export type Dice = "1d6";

export type RESTType = "short" | "long";

export type PurpleType = "per day" | "recharge on roll" | "recharge after rest";

export type Alignment = "lawful evil" | "any alignment" | "chaotic evil" | "chaotic good" | "lawful good" | "neutral" | "lawful neutral" | "unaligned" | "any non-good alignment" | "any non-lawful alignment" | "neutral evil" | "any chaotic alignment" | "neutral good" | "chaotic neutral" | "neutral good (50%) or neutral evil (50%)" | "any evil alignment";

export type ArmorClass = {
    type:       ArmorClassType;
    value:      number;
    condition?: ConditionImmunity;
    spell?:     ConditionImmunity;
    armor?:     ConditionImmunity[];
    desc?:      string;
}

export type ArmorClassType = "natural" | "dex" | "condition" | "spell" | "armor";

export type LegendaryAction = {
    name:          string;
    desc:          string;
    attack_bonus?: number;
    damage?:       AttackDamage[];
    dc?:           Dc;
}

export type Proficiency = {
    value:       number;
    proficiency: ConditionImmunity;
}

export type Reaction = {
    name: string;
    desc: string;
    dc?:  Dc;
}

export type Senses = {
    darkvision?:        Blindsight;
    passive_perception: number;
    blindsight?:        Blindsight;
    truesight?:         Blindsight;
    tremorsense?:       Blindsight;
}

export type Blindsight = "60 ft." | "60 ft. (blind beyond this radius)" | "10 ft." | "30 ft." | "30 ft. or 10 ft. while deafened (blind beyond this radius)" | "120 ft." | "30 ft. (blind beyond this radius)" | "90 ft.";

export type Size = "Large" | "Medium" | "Huge" | "Gargantuan" | "Small" | "Tiny";

export type SpecialAbility = {
    name:          string;
    desc:          string;
    dc?:           Dc;
    spellcasting?: Spellcasting;
    usage?:        SpecialAbilityUsage;
    damage?:       AttackDamage[];
    attack_bonus?: number;
}

export type Spellcasting = {
    level?:              number;
    ability:             ConditionImmunity;
    dc?:                 number;
    modifier?:           number;
    components_required: ComponentsRequired[];
    school?:             School;
    slots?:              { [key: string]: number };
    spells:              Spell[];
}

export type ComponentsRequired = "V" | "S" | "M";

export type School = "cleric" | "wizard" | "druid";

export type Spell = {
    name:   string;
    level:  number;
    url:    string;
    usage?: SpellUsage;
    notes?: string;
}

export type SpellUsage = {
    type:   FluffyType;
    times?: number;
}

export type FluffyType = "at will" | "per day";

export type SpecialAbilityUsage = {
    type:        PurpleType;
    times?:      number;
    rest_types?: RESTType[];
}

export type Speed = {
    walk?:   Burrow;
    swim?:   Climb;
    fly?:    Climb;
    burrow?: Burrow;
    climb?:  Climb;
    hover?:  boolean;
}

export type Burrow = "10 ft." | "30 ft." | "40 ft." | "25 ft." | "20 ft." | "50 ft." | "5 ft." | "0 ft." | "15 ft." | "60 ft.";

export type Climb = "40 ft." | "30 ft." | "20 ft." | "10 ft." | "80 ft." | "90 ft." | "60 ft." | "50 ft." | "120 ft." | "150 ft.";

export type The5ESRDMonsterType = "aberration" | "humanoid" | "dragon" | "elemental" | "monstrosity" | "construct" | "beast" | "plant" | "fiend" | "ooze" | "fey" | "giant" | "celestial" | "undead" | "swarm of Tiny beasts";

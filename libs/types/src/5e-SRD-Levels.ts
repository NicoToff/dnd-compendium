export type The5ESRDLevels = {
    level:                  number;
    ability_score_bonuses?: number;
    prof_bonus?:            number;
    features:               Class[];
    class_specific?:        ClassSpecific;
    index:                  string;
    class:                  Class;
    url:                    string;
    spellcasting?:          { [key: string]: number };
    subclass?:              Class;
    subclass_specific?:     SubclassSpecific;
}

export type Class = {
    index: string;
    name:  string;
    url:   string;
}

export type ClassSpecific = {
    rage_count?:               number;
    rage_damage_bonus?:        number;
    brutal_critical_dice?:     number;
    bardic_inspiration_die?:   number;
    song_of_rest_die?:         number;
    magical_secrets_max_5?:    number;
    magical_secrets_max_7?:    number;
    magical_secrets_max_9?:    number;
    channel_divinity_charges?: number;
    destroy_undead_cr?:        number;
    wild_shape_max_cr?:        number;
    wild_shape_swim?:          boolean;
    wild_shape_fly?:           boolean;
    action_surges?:            number;
    indomitable_uses?:         number;
    extra_attacks?:            number;
    martial_arts?:             MartialArts;
    ki_points?:                number;
    unarmored_movement?:       number;
    aura_range?:               number;
    favored_enemies?:          number;
    favored_terrain?:          number;
    sneak_attack?:             MartialArts;
    sorcery_points?:           number;
    metamagic_known?:          number;
    creating_spell_slots?:     CreatingSpellSlot[];
    invocations_known?:        number;
    mystic_arcanum_level_6?:   number;
    mystic_arcanum_level_7?:   number;
    mystic_arcanum_level_8?:   number;
    mystic_arcanum_level_9?:   number;
    arcane_recovery_levels?:   number;
}

export type CreatingSpellSlot = {
    spell_slot_level:   number;
    sorcery_point_cost: number;
}

export type MartialArts = {
    dice_count: number;
    dice_value: number;
}

export type SubclassSpecific = {
    additional_magical_secrets_max_lvl?: number;
    aura_range?:                         number;
}

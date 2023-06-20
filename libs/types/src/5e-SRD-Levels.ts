export type The5ESRDLevels = {
    level:                number;
    abilityScoreBonuses?: number;
    profBonus?:           number;
    features:             Class[];
    classSpecific?:       ClassSpecific;
    index:                string;
    class:                Class;
    url:                  string;
    spellcasting?:        { [key: string]: number };
    subclass?:            Class;
    subclassSpecific?:    SubclassSpecific;
}

export type Class = {
    index: string;
    name:  string;
    url:   string;
}

export type ClassSpecific = {
    rageCount?:              number;
    rageDamageBonus?:        number;
    brutalCriticalDice?:     number;
    bardicInspirationDie?:   number;
    songOfRESTDie?:          number;
    magicalSecretsMax5?:     number;
    magicalSecretsMax7?:     number;
    magicalSecretsMax9?:     number;
    channelDivinityCharges?: number;
    destroyUndeadCR?:        number;
    wildShapeMaxCR?:         number;
    wildShapeSwim?:          boolean;
    wildShapeFly?:           boolean;
    actionSurges?:           number;
    indomitableUses?:        number;
    extraAttacks?:           number;
    martialArts?:            MartialArts;
    kiPoints?:               number;
    unarmoredMovement?:      number;
    auraRange?:              number;
    favoredEnemies?:         number;
    favoredTerrain?:         number;
    sneakAttack?:            MartialArts;
    sorceryPoints?:          number;
    metamagicKnown?:         number;
    creatingSpellSlots?:     CreatingSpellSlot[];
    invocationsKnown?:       number;
    mysticArcanumLevel6?:    number;
    mysticArcanumLevel7?:    number;
    mysticArcanumLevel8?:    number;
    mysticArcanumLevel9?:    number;
    arcaneRecoveryLevels?:   number;
}

export type CreatingSpellSlot = {
    spellSlotLevel:   number;
    sorceryPointCost: number;
}

export type MartialArts = {
    diceCount: number;
    diceValue: number;
}

export type SubclassSpecific = {
    additionalMagicalSecretsMaxLvl?: number;
    auraRange?:                      number;
}

export type The5ESRDSpells = {
    index:            string;
    name:             string;
    desc:             string[];
    higherLevel?:     string[];
    range:            Range;
    components:       Component[];
    material?:        string;
    ritual:           boolean;
    duration:         string;
    concentration:    boolean;
    castingTime:      CastingTime;
    level:            number;
    attackType?:      AttackType;
    damage?:          Damage;
    school:           School;
    classes:          School[];
    subclasses:       School[];
    url:              string;
    dc?:              Dc;
    healAtSlotLevel?: { [key: string]: string };
    areaOfEffect?:    AreaOfEffect;
}

export type AreaOfEffect = {
    type: Type;
    size: number;
}

export type Type = "cube" | "sphere" | "line" | "cone" | "cylinder";

export type AttackType = "ranged" | "melee";

export type CastingTime = "1 action" | "1 minute" | "1 hour" | "8 hours" | "1 bonus action" | "10 minutes" | "1 reaction" | "24 hours" | "12 hours";

export type School = {
    index: string;
    name:  string;
    url:   string;
}

export type Component = "V" | "S" | "M";

export type Damage = {
    damageType?:             School;
    damageAtSlotLevel?:      { [key: string]: string };
    damageAtCharacterLevel?: { [key: string]: string };
}

export type Dc = {
    dcType:    School;
    dcSuccess: DcSuccess;
    desc?:     string;
}

export type DcSuccess = "none" | "half" | "other";

export type Range = "90 feet" | "60 feet" | "30 feet" | "Self" | "10 feet" | "120 feet" | "Touch" | "150 feet" | "1 mile" | "300 feet" | "500 feet" | "Special" | "100 feet" | "Sight" | "500 miles" | "Unlimited" | "5 feet";

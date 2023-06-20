export type The5ESRDEquipment = {
    index:                string;
    name:                 string;
    equipmentCategory:    EquipmentCategory;
    weaponCategory?:      WeaponCategory;
    weaponRange?:         WeaponRange;
    categoryRange?:       CategoryRange;
    cost:                 Cost;
    damage?:              Damage;
    range?:               Range;
    weight?:              number;
    properties?:          EquipmentCategory[];
    url:                  string;
    throwRange?:          Range;
    twoHandedDamage?:     Damage;
    special?:             string[];
    armorCategory?:       string;
    armorClass?:          ArmorClass;
    strMinimum?:          number;
    stealthDisadvantage?: boolean;
    gearCategory?:        EquipmentCategory;
    desc?:                string[];
    quantity?:            number;
    contents?:            Content[];
    toolCategory?:        ToolCategory;
    vehicleCategory?:     VehicleCategory;
    speed?:               Cost;
    capacity?:            string;
}

export type ArmorClass = {
    base:      number;
    dexBonus:  boolean;
    maxBonus?: number;
}

export type CategoryRange = "Simple Melee" | "Simple Ranged" | "Martial Melee" | "Martial Ranged";

export type Content = {
    item:     EquipmentCategory;
    quantity: number;
}

export type EquipmentCategory = {
    index: string;
    name:  string;
    url:   string;
}

export type Cost = {
    quantity: number;
    unit:     Unit;
}

export type Unit = "sp" | "gp" | "cp" | "ft/round" | "mph";

export type Damage = {
    damageDice: string;
    damageType: EquipmentCategory;
}

export type Range = {
    normal: number;
    long?:  number;
}

export type ToolCategory = "Artisan's Tools" | "Gaming Sets" | "Musical Instrument" | "Other Tools";

export type VehicleCategory = "Mounts and Other Animals" | "Tack, Harness, and Drawn Vehicles" | "Waterborne Vehicles";

export type WeaponCategory = "Simple" | "Martial";

export type WeaponRange = "Melee" | "Ranged";

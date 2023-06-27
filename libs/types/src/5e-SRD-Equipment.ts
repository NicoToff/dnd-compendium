export type The5ESRDEquipment = {
    index:                 string;
    name:                  string;
    equipment_category:    EquipmentCategory;
    weapon_category?:      WeaponCategory;
    weapon_range?:         WeaponRange;
    category_range?:       CategoryRange;
    cost:                  Cost;
    damage?:               Damage;
    range?:                Range;
    weight?:               number;
    properties?:           EquipmentCategory[];
    url:                   string;
    throw_range?:          Range;
    two_handed_damage?:    Damage;
    special?:              string[];
    armor_category?:       string;
    armor_class?:          ArmorClass;
    str_minimum?:          number;
    stealth_disadvantage?: boolean;
    gear_category?:        EquipmentCategory;
    desc?:                 string[];
    quantity?:             number;
    contents?:             Content[];
    tool_category?:        ToolCategory;
    vehicle_category?:     VehicleCategory;
    speed?:                Cost;
    capacity?:             string;
}

export type ArmorClass = {
    base:       number;
    dex_bonus:  boolean;
    max_bonus?: number;
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
    damage_dice: string;
    damage_type: EquipmentCategory;
}

export type Range = {
    normal: number;
    long?:  number;
}

export type ToolCategory = "Artisan's Tools" | "Gaming Sets" | "Musical Instrument" | "Other Tools";

export type VehicleCategory = "Mounts and Other Animals" | "Tack, Harness, and Drawn Vehicles" | "Waterborne Vehicles";

export type WeaponCategory = "Simple" | "Martial";

export type WeaponRange = "Melee" | "Ranged";

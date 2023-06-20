export type The5ESRDMagicItems = {
    index:             string;
    name:              string;
    equipmentCategory: EquipmentCategory;
    rarity:            Rarity;
    variants:          EquipmentCategory[];
    variant:           boolean;
    desc:              string[];
    url:               string;
}

export type EquipmentCategory = {
    index: string;
    name:  string;
    url:   string;
}

export type Rarity = {
    name: Name;
}

export type Name = "Uncommon" | "Varies" | "Rare" | "Very Rare" | "Legendary" | "Common" | "Artifact";

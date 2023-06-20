export type The5ESRDProficiencies = {
    index:     string;
    type:      Type;
    name:      string;
    classes:   Reference[];
    races:     Reference[];
    url:       string;
    reference: Reference;
}

export type Reference = {
    index: string;
    name:  string;
    url:   string;
}

export type Type = "Armor" | "Weapons" | "Artisan's Tools" | "Gaming Sets" | "Musical Instruments" | "Other" | "Vehicles" | "Saving Throws" | "Skills";

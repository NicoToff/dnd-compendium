export type The5ESRDSubclasses = {
    index:           string;
    class:           Class;
    name:            string;
    subclass_flavor: string;
    desc:            string[];
    subclass_levels: string;
    url:             string;
    spells?:         Spell[];
}

export type Class = {
    index: string;
    name:  string;
    url:   string;
    type?: Type;
}

export type Type = "level" | "feature";

export type Spell = {
    prerequisites: Class[];
    spell:         Class;
}

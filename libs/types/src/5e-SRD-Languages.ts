export type The5ESRDLanguages = {
    index:            string;
    name:             string;
    type:             Type;
    typical_speakers: string[];
    script?:          string;
    url:              string;
    desc?:            string;
}

export type Type = "Standard" | "Exotic";

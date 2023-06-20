export type The5ESRDLanguages = {
    index:           string;
    name:            string;
    type:            Type;
    typicalSpeakers: string[];
    script?:         string;
    url:             string;
    desc?:           string;
}

export type Type = "Standard" | "Exotic";

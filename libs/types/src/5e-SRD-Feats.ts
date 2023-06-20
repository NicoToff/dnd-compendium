export type The5ESRDFeats = {
    index:         string;
    name:          string;
    prerequisites: Prerequisite[];
    desc:          string[];
    url:           string;
}

export type Prerequisite = {
    abilityScore: AbilityScore;
    minimumScore: number;
}

export type AbilityScore = {
    index: string;
    name:  string;
    url:   string;
}

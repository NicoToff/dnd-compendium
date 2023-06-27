export type The5ESRDFeats = {
    index:         string;
    name:          string;
    prerequisites: Prerequisite[];
    desc:          string[];
    url:           string;
}

export type Prerequisite = {
    ability_score: AbilityScore;
    minimum_score: number;
}

export type AbilityScore = {
    index: string;
    name:  string;
    url:   string;
}

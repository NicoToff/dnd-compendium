export type The5ESRDAbilityScores = {
    index:    string;
    name:     string;
    fullName: string;
    desc:     string[];
    skills:   Skill[];
    url:      string;
}

export type Skill = {
    name:  string;
    index: string;
    url:   string;
}

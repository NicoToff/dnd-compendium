export type The5ESRDAbilityScores = {
    index:     string;
    name:      string;
    full_name: string;
    desc:      string[];
    skills:    Skill[];
    url:       string;
}

export type Skill = {
    name:  string;
    index: string;
    url:   string;
}

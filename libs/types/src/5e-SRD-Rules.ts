export type The5ESRDRules = {
    name:        string;
    index:       string;
    desc:        string;
    subsections: Subsection[];
    url:         string;
}

export type Subsection = {
    name:  string;
    index: string;
    url:   string;
}

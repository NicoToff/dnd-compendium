export type The5ESRDClasses = {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ProficiencyChoice[];
  proficiencies: Proficiency[];
  saving_throws: Proficiency[];
  starting_equipment: StartingEquipment[];
  starting_equipment_options: StartingEquipmentOption[];
  class_levels: string;
  multi_classing: MultiClassing;
  subclasses: Proficiency[];
  url: string;
  spellcasting?: Spellcasting;
  spells?: string;
};

export type MultiClassing = {
  prerequisites?: MultiClassingPrerequisite[];
  proficiencies: Proficiency[];
  proficiency_choices?: ProficiencyChoiceElement[];
  prerequisite_options?: PrerequisiteOptions;
};

export type PrerequisiteOptions = {
  type: string;
  choose: number;
  from: PrerequisiteOptionsFrom;
};

export type PrerequisiteOptionsFrom = {
  option_set_type: OptionSetType;
  options: PurpleOption[];
};

export type OptionSetType = "options_array" | "equipment_category";

export type PurpleOption = {
  option_type: string;
  ability_score: Proficiency;
  minimum_score: number;
};

export type Proficiency = {
  index: string;
  name: string;
  url: string;
};

export type MultiClassingPrerequisite = {
  ability_score: Proficiency;
  minimum_score: number;
};

export type ProficiencyChoiceElement = {
  desc?: string;
  choose: number;
  type: ProficiencyChoiceType;
  from: PurpleFrom;
};

export type PurpleFrom = {
  option_set_type: OptionSetType;
  options: FluffyOption[];
};

export type FluffyOption = {
  option_type: PurpleOptionType;
  item: Proficiency;
};

export type PurpleOptionType = "reference" | "choice";

export type ProficiencyChoiceType = "proficiencies";

export type ProficiencyChoice = {
  desc: string;
  choose: number;
  type: ProficiencyChoiceType;
  from: FluffyFrom;
};

export type FluffyFrom = {
  option_set_type: OptionSetType;
  options: TentacledOption[];
};

export type TentacledOption = {
  option_type: PurpleOptionType;
  item?: Proficiency;
  choice?: ProficiencyChoiceElement;
};

export type Spellcasting = {
  level: number;
  spellcasting_ability: Proficiency;
  info: Info[];
};

export type Info = {
  name: string;
  desc: string[];
};

export type StartingEquipment = {
  equipment: Proficiency;
  quantity: number;
};

export type StartingEquipmentOption = {
  desc: string;
  choose: number;
  type: StartingEquipmentOptionType;
  from: StartingEquipmentOptionFrom;
};

export type StartingEquipmentOptionFrom = {
  option_set_type: OptionSetType;
  options?: StickyOption[];
  equipment_category?: Proficiency;
};

export type StickyOption = {
  option_type: ItemOptionType;
  count?: number;
  of?: Proficiency;
  choice?: ItemChoice;
  prerequisites?: OptionPrerequisite[];
  items?: Item[];
};

export type ItemChoice = {
  desc: string;
  choose: number;
  type: StartingEquipmentOptionType;
  from: TentacledFrom;
};

export type TentacledFrom = {
  option_set_type: OptionSetType;
  equipment_category: Proficiency;
};

export type StartingEquipmentOptionType = "equipment";

export type Item = {
  option_type: ItemOptionType;
  count?: number;
  of?: Proficiency;
  choice?: ItemChoice;
};

export type ItemOptionType = "counted_reference" | "choice" | "multiple";

export type OptionPrerequisite = {
  type: string;
  proficiency: Proficiency;
};

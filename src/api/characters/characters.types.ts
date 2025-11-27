export type HogwartsHouse = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff' | string;
export type Gender = 'male' | 'female' | string;

export interface Wand {
	wood: string;
	core: string;
	length: number | null;
}

export interface Character {
	id: string;
	name: string;
	alternate_names: string[];
	species: string;
	gender: Gender;
	house: HogwartsHouse;

	dateOfBirth: string | null;
	yearOfBirth: number | null;

	wizard: boolean;
	ancestry: string;
	eyeColour: string;
	hairColour: string;

	wand: Wand;

	patronus: string;
	hogwartsStudent: boolean;
	hogwartsStaff: boolean;

	actor: string;
	alternate_actors: string[];

	alive: boolean;
	image: string;
}

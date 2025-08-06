export interface Movie {
	id: string;
	title: string;
	overview: string;
	release_date: string;
	poster_path: string;
}
export type Trailer = {
	id: string;
	key: string;
	name: string;
	site: string;
	type: string;
};
export type User = {
	id: string;
	email: string;
	displayName: string;
	photoURL: string;
};

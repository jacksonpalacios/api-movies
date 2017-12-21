import { Movie } from './movie';

export class Actor {
    popularity: number;
    id: string;
    profilePath: string;
    name: string;
    knownFor: Movie[];     
}
import { Videos } from "./videos";

export class Movie {
    voteCount: number;
    id: string;
    video: boolean;    
    voteAverage: string;
    title: string;
    popularity: number;
    posterPath: boolean;
    originalLanguage: string;
    originalTitle: string;
    genre_ids:number[];
    backdropPath:string;
    adult:boolean;
    overview:string;
    releaseDate:string;
}
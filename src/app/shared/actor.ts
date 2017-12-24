import { Movie } from './movie';
import { Images } from './images';

export class Actor {
    popularity: number;
    id: string;
    profile_path: string;
    name: string;
    known_for: Movie[];  
    images: Images[];
}
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from '../search/search.component';
import { MoviesComponent } from '../movies/movies.component';
import { ActorsComponent } from '../actors/actors.component';


export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},  
    {path: 'about', component: AboutComponent},
    {path: 'search', component: SearchComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'actors', component: ActorsComponent},
    /*   
    {path: 'dishdetail/:id', component: DishDetailComponent},    
    {path: 'contactus', component: ContactComponent}
    */

    
];


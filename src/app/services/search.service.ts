import { Injectable } from '@angular/core';
import { ApiKey, IncludeAdult } from '../shared/queryString';
import { Actor } from '../shared/actor';

@Injectable()
export class SearchService {
  private language: string;
  private query: string;
  private page: number;

  /*
   Otros atributos específicos para buscar películas
  */
  private year: number;
  private primaryReleaseYear: number;

  constructor() { }

}

import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search, SearchType } from '../shared/search';

import { SearchService } from '../services/search.service';
import { CollectionActors } from '../shared/collectionactors';
import { CollectionMovies } from '../shared/collectionmovies';
import { SearchActorsComponent } from '../search-actors/search-actors.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  page: number;
  search: Search;
  searchForm: FormGroup;
  searchType = SearchType;
  valueSearchType: string;
  searchQuery: string;

  formErrors = {
    'query': ''
  };

  validationMessages = {
    'query': {
      'minlength': 'El texto a buscar debe ser mayor a 2 caracteres',
      'maxlength': 'El texto a buscar no debe ser mayor a 25 caracteres'
    }
  }


  constructor(private fb: FormBuilder) {
    this.page = 1;
    this.createForm();
  }

  ngOnInit() {

  }

  /*
   Se crea el formulario reactivo
  */
  createForm() {

    this.searchForm = this.fb.group({
      query: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      valueSearchType: 'Movies'
    });

    /*
      Se realiza la petición cada vez query cambie de valor
    */    
    this.searchForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

  }

  /*
    Validad los campos cada vez que el formulario cambia de valor
   */
  onValueChanged(data?: any) {
    if (!this.searchForm) {
      return;
    }
    const form = this.searchForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}

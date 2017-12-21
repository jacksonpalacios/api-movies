import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search, SearchType } from '../shared/search';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from '../services/search.service';
import { Actor } from '../shared/actor';
import { CollectionActors } from '../shared/collectionactors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  search: Search;
  searchType = SearchType;
  page:number;

  private errMess: string;
  public actors: CollectionActors;  

  formErrors = {
    'query': ''
  };

  validationMessages = {
    'query': {
      'minlength': 'El texto a buscar debe ser mayor a 2 caracteres',
      'maxlength': 'El texto a buscar no debe ser mayor a 25 caracteres'
    }
  }

  constructor(private fb: FormBuilder,
    private searchService: SearchService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {
    this.page = 1;    
        
    this.createForm();
    
  }

  ngOnInit() {
  }

  createForm() {
    
    this.searchForm = this.fb.group({
      query: ['', [Validators.minLength(3), Validators.maxLength(25)]],
      searchType: 'Movies'      
    });

    this.searchForm.controls.query.valueChanges
      .filter((searchText: string) => { return searchText.length > 2 })
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(query => {        
        return this.searchService.getSearchActors(query)
          .subscribe(res => {
            this.actors = res['results'];   
            console.log(this.actors);                   
          },
          errmess => this.errMess = <any>errmess);

      });    
    this.searchForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
    
  }

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

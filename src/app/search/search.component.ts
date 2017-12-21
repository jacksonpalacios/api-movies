import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search, SearchType } from '../shared/search';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  search: Search;
  searchType = SearchType;

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
    @Inject('BaseURL') private BaseURL, 
    @Inject('ImagesURL') private ImagesURL) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.searchForm = this.fb.group({
      query: ['', [Validators.minLength(2), Validators.maxLength(25)]],
      searchType: 'Movies'
    });

    this.searchForm.valueChanges
    .map(data => {
      console.log(data.query);
      return data;
    })
    .subscribe(data => {      
      this.onValueChanged(data);
    });
   
     

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

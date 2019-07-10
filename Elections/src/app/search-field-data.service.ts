import { Injectable } from '@angular/core';
import { SingleSearchField } from './SingleSearchField';

@Injectable({
  providedIn: 'root'
})
export class SearchFieldDataService {
  searchFields: SingleSearchField[];
  constructor() {
    this.searchFields = [{fieldCode: 'Id', fieldName: 'Id', fieldType: 'number'},
                         {fieldCode: 'FirstName', fieldName: 'First Name', fieldType: 'text'},
                         {fieldCode: 'LastName', fieldName: 'Last Name', fieldType: 'text'},
                         {fieldCode: 'Address', fieldName: 'Address', fieldType: 'text'},
                         {fieldCode: 'City', fieldName: 'City', fieldType: 'text'},
                         {fieldCode: 'Vote', fieldName: 'Vote?', fieldType: 'checkbox'}
                        ];
  }
  getSearchFields() {
    return this.searchFields;
  }
}

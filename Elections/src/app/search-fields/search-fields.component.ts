import { Component, OnInit } from '@angular/core';
import { SingleSearchField } from '../SingleSearchField';
import { SearchFieldDataService } from '../search-field-data.service';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.sass']
})
export class SearchFieldsComponent implements OnInit {
  searchFields: SingleSearchField[];
  constructor(private searchFieldDataService:SearchFieldDataService) { }

  ngOnInit() {
    this.searchFields = this.searchFieldDataService.getSearchFields();
    /*this.searchFields = [{fieldCode: 'IdentityNumber', fieldName: 'Identity Number', fieldType: 'number'},
                         {fieldCode: 'FirstName', fieldName: 'First Name', fieldType: 'text'},
                         {fieldCode: 'LastName', fieldName: 'Last Name', fieldType: 'text'},
                         {fieldCode: 'Address', fieldName: 'Address', fieldType: 'text'},
                         {fieldCode: 'City', fieldName: 'City', fieldType: 'text'},
                         {fieldCode: 'DidVote', fieldName: 'Did Vote?', fieldType: 'checkbox'}
                        ];*/
  }

}

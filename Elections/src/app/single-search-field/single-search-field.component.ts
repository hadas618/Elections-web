import { Component, OnInit, Input } from '@angular/core';
import { SingleSearchField } from '../SingleSearchField';

@Component({
  selector: 'app-single-search-field',
  templateUrl: './single-search-field.component.html',
  styleUrls: ['./single-search-field.component.sass']
})
export class SingleSearchFieldComponent implements OnInit {
  /*@Input() fieldType: string;
  @Input() fieldName: string;*/
  fieldType: string;
  fieldName: string;
  @Input() singleSearchField: SingleSearchField;
  constructor() { }

  ngOnInit() {
    this.fieldType = 'number';
    this.fieldName = 'Identity number';
  }

}

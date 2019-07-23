import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-elections-results',
  templateUrl: './details-elections-results.component.html',
  styleUrls: ['./details-elections-results.component.sass']
})
export class DetailsElectionsResultsComponent implements OnInit {
  @Input() ballotState:boolean;
  constructor() { }

  ngOnInit() {
  }

}

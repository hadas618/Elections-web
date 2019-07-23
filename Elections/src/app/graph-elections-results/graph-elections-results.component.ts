import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-elections-results',
  templateUrl: './graph-elections-results.component.html',
  styleUrls: ['./graph-elections-results.component.sass']
})
export class GraphElectionsResultsComponent implements OnInit {
  @Input() ballotState:boolean;
  constructor() { }

  ngOnInit() {
  }

}

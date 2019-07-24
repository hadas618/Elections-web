import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CitizenDataService } from '../citizen-data.service';

@Component({
  selector: 'app-elections-results',
  templateUrl: './elections-results.component.html',
  styleUrls: ['./elections-results.component.scss']
})
export class ElectionsResultsComponent implements OnInit, OnDestroy {
  ballotState: boolean;
  ballotStateSubscribe: Subscription;
  constructor(private citizenDataService: CitizenDataService) { }

  ngOnInit() {
    this.ballotStateSubscribe =  this.citizenDataService.ballotState$.subscribe(data => {
    this.ballotState = data;
    });
  }
  ngOnDestroy() {
    this.ballotStateSubscribe.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CitizenDataService } from '../citizen-data.service';
import { VotingCardDataService } from '../voting-card-data.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {
  ballotState$: Observable<boolean>;
  constructor(private citizenDataService: CitizenDataService,
              private votingCardDataService: VotingCardDataService,
              private dialogRef: MatDialogRef<WarningComponent>) { }

  ngOnInit() {
    this.ballotState$ = this.citizenDataService.ballotState$;
  }
  closeBallot(){
    this.citizenDataService.ballotState = false;
    this.votingCardDataService.calculateSeats();
    this.dialogRef.close();
  }
  logOut(){
    this.dialogRef.close();
  }
}

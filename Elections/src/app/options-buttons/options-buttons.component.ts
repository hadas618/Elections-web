import { Component, OnInit } from '@angular/core';
import { CitizenDataService } from '../citizen-data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVoterComponent } from '../update-voter/update-voter.component';
import { CitizenData } from '../CitizenData';
import { Router } from '@angular/router';
import { VotingCardDataService } from '../voting-card-data.service';
import { Observable } from 'rxjs';
import { WarningComponent } from '../warning/warning.component';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.css']
})
export class OptionsButtonsComponent implements OnInit {
  ballotState$: Observable<boolean>;
  voterState$: Observable<boolean>;
  electionsResults: string;
  constructor(
    private citizenDataService: CitizenDataService,
    private votingCardDataService: VotingCardDataService,
    public dialogVoter: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.ballotState$ = this.citizenDataService.ballotState$;
    this.voterState$ = this.citizenDataService.voterState$;
    this.electionsResults = "Intermediate Results";
  }
  openDialog() {
    let citizenData: CitizenData;
    citizenData = this.citizenDataService.getChooseUpdateVoter();
    this.dialogVoter.open(UpdateVoterComponent, {
      data: {
        citizenData
      }
    });
  }
  closeBallot() {
    this.dialogVoter.open(WarningComponent);
    let sumVotes: number;
    let i: number;
    let votesPerSeats: number;
    let numberOfSeats: number;
    sumVotes = 0;
    this.citizenDataService.ballotState = false;
    this.citizenDataService.voterState = false;
    this.electionsResults = "Finally Results";
    for (i = 0; i < this.votingCardDataService.votingCardList.length; i++)
      sumVotes += this.votingCardDataService.votingCardList[i].numberOfVotes;
    votesPerSeats = sumVotes / 120;
    for (i = 0; i < this.votingCardDataService.votingCardList.length; i++) {
      numberOfSeats =
        this.votingCardDataService.votingCardList[i].numberOfVotes /
        votesPerSeats;
      this.votingCardDataService.votingCardList[i].numberOfSeats = Math.floor(
        numberOfSeats
      );
    }
  }
  openElectionsResults() {
    let returnUrl: string;
    returnUrl = '/elections-results';
    this.router.navigate([returnUrl]);
  }
}

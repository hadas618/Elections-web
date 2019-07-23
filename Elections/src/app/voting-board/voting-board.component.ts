import { Component, OnInit } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VotingCardChosenComponent } from '../voting-card-chosen/voting-card-chosen.component';

@Component({
  selector: 'app-voting-board',
  templateUrl: './voting-board.component.html',
  styleUrls: ['./voting-board.component.scss']
})
export class VotingBoardComponent implements OnInit {
  visibleResults: boolean;
  enableClick: boolean;
  constructor() { }

  ngOnInit() {
    this.visibleResults= false;
    this.enableClick = true;
  }
}

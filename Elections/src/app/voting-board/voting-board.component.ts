import { Component, OnInit } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VotingCardChosenComponent } from '../voting-card-chosen/voting-card-chosen.component';

@Component({
  selector: 'app-voting-board',
  templateUrl: './voting-board.component.html',
  styleUrls: ['./voting-board.component.css']
})
export class VotingBoardComponent implements OnInit {
  votingCardList: VotingCard[];
  dialogRef: MatDialogRef<VotingCardChosenComponent>;
  source: string;
  constructor(private votingCardDataService: VotingCardDataService, public dialog: MatDialog ) { }

  ngOnInit() {
    this.votingCardList = this.votingCardDataService.getVotingCardList();
    this.source='board';
  }
  openDialog(letter: string) {
    this.dialog.open(VotingCardChosenComponent, {
      data: {
        letter }
      });
    }
}

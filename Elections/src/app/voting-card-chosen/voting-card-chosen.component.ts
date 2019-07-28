import { Component, OnInit, Inject } from '@angular/core';
import { VotingCardDataService } from '../voting-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { VotingCard } from '../votingCard';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogData } from '../DialogData';
@Component({
  selector: 'app-voting-card-chosen',
  templateUrl: './voting-card-chosen.component.html',
  styleUrls: ['./voting-card-chosen.component.css']
})
export class VotingCardChosenComponent implements OnInit {
votingCardList: VotingCard[];
letter;
index: string;
  constructor(private votingCardData: VotingCardDataService, private dialogRef: MatDialogRef<VotingCardChosenComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.votingCardList = votingCardData.getVotingCardList();
    this.letter = data.letter;
   }
   public open(letter: string) {
      this.votingCardData.setVoting(letter);
      this.dialogRef.close();
      setTimeout(function(){ window.close(); }, 250);
  }
  public logOut() {
    this.dialogRef.close();
}

  ngOnInit() {
  }

}

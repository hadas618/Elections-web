import { Component, OnInit, Inject } from '@angular/core';
import { VotingCardDataService } from '../voting-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { VotingCard } from '../votingCard';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  letter: string;
}

@Component({
  selector: 'app-voting-card-chosen',
  templateUrl: './voting-card-chosen.component.html',
  styleUrls: ['./voting-card-chosen.component.sass']
})
export class VotingCardChosenComponent implements OnInit {
//votingCard: VotingCard;
letter;
  constructor(/*private votingCardData: VotingCardDataService, private route: ActivatedRoute, */@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    // this.route.params.subscribe(params => {
    //   this.letter = params.votingLetter
    //   this.votingCard = votingCardData.getVotingCard(this.letter);
    // });
    //this.votingCard.letter = data;
    this.letter = data.letter;
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { VotingCardDataService } from '../voting-card-data.service';
import { ActivatedRoute } from '@angular/router';
import { VotingCard } from '../votingCard';

@Component({
  selector: 'app-voting-card-chosen',
  templateUrl: './voting-card-chosen.component.html',
  styleUrls: ['./voting-card-chosen.component.sass']
})
export class VotingCardChosenComponent implements OnInit {
votingCard: VotingCard;
letter;
  constructor(private votingCardData: VotingCardDataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.letter = params.votingLetter
      this.votingCard = votingCardData.getVotingCard(this.letter);
    });
    
   }

  ngOnInit() {
  }

}

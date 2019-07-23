import { Component, OnInit, Input } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';

@Component({
  selector: 'app-voting-card-results',
  templateUrl: './voting-card-results.component.html',
  styleUrls: ['./voting-card-results.component.sass']
})
export class VotingCardResultsComponent implements OnInit {
  @Input() ballotState:boolean;
  votingCardResultsList: VotingCard[];
  source: string;
  visibleResults: boolean;
  enableClick: boolean;
  constructor(private votingCardDataService: VotingCardDataService) { }

  ngOnInit() {
    this.votingCardResultsList = this.votingCardDataService.getVotingCardList();
    this.visibleResults = !this.ballotState;
    this.enableClick = false;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss']
})
export class VotingCardComponent implements OnInit {
  @Input() votingCard: VotingCard;
  @Input() visibleResults: boolean;
  visible: boolean;
  constructor() {}

  ngOnInit(): void {
  }
}

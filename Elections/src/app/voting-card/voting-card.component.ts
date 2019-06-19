import { Component, OnInit, Input } from '@angular/core';
import { VotingCard } from '../votingCard';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.sass']
})
export class VotingCardComponent implements OnInit {
  @Input() votingCard: VotingCard;
  constructor() { }

  ngOnInit() {
  }

}

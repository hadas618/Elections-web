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
  @Input() source: string;
  visible: boolean;
  constructor() {}

  ngOnInit(): void {
    if (this.source === 'results') {
      this.visible = true;
    } else {
      this.visible = false;
    }
    // this.votingCardData.getVotingCard(path)
    //     .subscribe(
    //         votingCard => {
    //             this.votingCard = this.votingCardData();
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //     );
  }
}

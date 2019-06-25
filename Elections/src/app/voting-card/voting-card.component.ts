import { Component, OnInit, Input } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.sass']
})
export class VotingCardComponent implements OnInit {
  @Input() votingCard: VotingCard;
  constructor() {
  }
  openDialog() {
    this.votingCard.letter(this.votingCard,{
      
    });
  }

  ngOnInit(): void {
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

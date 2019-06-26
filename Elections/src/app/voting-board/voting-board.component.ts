import { Component, OnInit } from '@angular/core';
import { VotingCard } from '../votingCard';
import { VotingCardDataService } from '../voting-card-data.service';
import { MatDialog } from '@angular/material/dialog';
import { VotingCardChosenComponent } from '../voting-card-chosen/voting-card-chosen.component';

@Component({
  selector: 'app-voting-board',
  templateUrl: './voting-board.component.html',
  styleUrls: ['./voting-board.component.css']
})
export class VotingBoardComponent implements OnInit {
  votingCardList: VotingCard[];
  constructor(private votingCardDataService: VotingCardDataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.votingCardList = this.votingCardDataService.getVotingCardList();
    /*this.votingCardList = [{letter: 'a', numberOfVotes: 100, numberOfSeats: 2},
                           {letter: 'b', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'c', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'd', numberOfVotes: 500, numberOfSeats: 7},
                           {letter: 'e', numberOfVotes: 600, numberOfSeats: 2},
                           {letter: 'f', numberOfVotes: 500, numberOfSeats: 4},
                           {letter: 'g', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'h', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'i', numberOfVotes: 300, numberOfSeats: 5},
                           {letter: 'j', numberOfVotes: 800, numberOfSeats: 8},
                          ];*/
  }
  openDialog(letter: string) {
    this.dialog.open(VotingCardChosenComponent, {
      data: {
        letter }
      });
  }
}

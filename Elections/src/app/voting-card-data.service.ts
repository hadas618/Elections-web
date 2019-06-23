import { Injectable } from '@angular/core';
import { VotingCard } from './votingCard';

@Injectable({
  providedIn: 'root'
})
export class VotingCardDataService {
  votingCardList: VotingCard[];
  constructor() {
    this.votingCardList = [{letter: 'a', numberOfVotes: 100, numberOfSeats: 2},
                           {letter: 'b', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'c', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'd', numberOfVotes: 500, numberOfSeats: 7},
                           {letter: 'e', numberOfVotes: 600, numberOfSeats: 2},
                           {letter: 'f', numberOfVotes: 500, numberOfSeats: 4},
                           {letter: 'g', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'h', numberOfVotes: 500, numberOfSeats: 2},
                           {letter: 'i', numberOfVotes: 300, numberOfSeats: 5},
                           {letter: 'j', numberOfVotes: 800, numberOfSeats: 8},
                          ];
  }
  getVotingCardList() {
    return this.votingCardList;
  }
  getVotingCard(letter: string) {
    return this.votingCardList.find(votingCard => votingCard.letter === letter);
  }
}

import { Injectable } from '@angular/core';
import { VotingCard } from './votingCard';

@Injectable({
  providedIn: 'root'
})
export class VotingCardDataService {
  votingCardList: VotingCard[]=[{ letter: 'A', partyName: 'All of us', numberOfVotes: 320, numberOfSeats: 2 },
  { letter: 'B', partyName: 'Behind', numberOfVotes: 720, numberOfSeats: 2 },
  { letter: 'C', partyName: 'Children', numberOfVotes: 400, numberOfSeats: 2 },
  { letter: 'D', partyName: 'Donations', numberOfVotes: 420, numberOfSeats: 7 },
  { letter: 'E', partyName: 'Earn', numberOfVotes: 600, numberOfSeats: 2 },
  { letter: 'F', partyName: 'Fun', numberOfVotes: 500, numberOfSeats: 4 },
  { letter: 'G', partyName: 'Gamings', numberOfVotes: 400, numberOfSeats: 2 },
  { letter: 'H', partyName: 'Health', numberOfVotes: 500, numberOfSeats: 2 },
  { letter: 'I', partyName: 'I', numberOfVotes: 400, numberOfSeats: 5 },
  { letter: 'J', partyName: 'Jwelery', numberOfVotes: 600, numberOfSeats: 8 },
  { letter: 'K', partyName: 'Kitan', numberOfVotes: 500, numberOfSeats: 8 },
  { letter: 'L', partyName: 'Learning', numberOfVotes: 650, numberOfSeats: 8 }
  ];
  constructor() {
    const savedData = localStorage.getItem('votingCardsData');
    if (!savedData) {
      localStorage.setItem('votingCardsData', JSON.stringify(this.votingCardList));
    } else {
      this.votingCardList = JSON.parse(savedData);
    }
  }
  getVotingCardList() {
    return this.votingCardList;
  }
  getVotingCard(letter: string) {
    return this.votingCardList.find(votingCard => votingCard.letter === letter);
  }
  setVoting(letter: string){
    this.votingCardList.find(votingCard => votingCard.letter === letter).numberOfVotes++;
    localStorage.setItem('votingCardsData', JSON.stringify(this.votingCardList));
  }
  getLetters() {
    let letters: string[] = [this.votingCardList.length.toString()];
    let i: number;
    for (i = 0; i < this.votingCardList.length; i++)
      letters[i] = this.votingCardList[i].letter;
    return letters;
  }
  getNumberOfVotes() {
    let numberOfVotes: number[] = [this.votingCardList.length];
    let i: number;
    for (i = 0; i < this.votingCardList.length; i++)
      numberOfVotes[i] = this.votingCardList[i].numberOfVotes;
    return numberOfVotes;
  }
  calculateSeats() {
    let sumVotes: number;
    let i: number;
    let votesPerSeats: number;
    let numberOfSeats: number;
    sumVotes = 0;
    for (i = 0; i < this.votingCardList.length; i++)
      sumVotes += this.votingCardList[i].numberOfVotes;
    votesPerSeats = sumVotes / 120;
    for (i = 0; i < this.votingCardList.length; i++) {
      numberOfSeats =
        this.votingCardList[i].numberOfVotes /
        votesPerSeats;
      this.votingCardList[i].numberOfSeats = Math.floor(
        numberOfSeats
      );
    }
    localStorage.setItem('votingCardsData', JSON.stringify(this.votingCardList));
  }
}

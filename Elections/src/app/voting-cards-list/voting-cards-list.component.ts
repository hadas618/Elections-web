import { Component, OnInit, Input } from "@angular/core";
import { VotingCard } from "../votingCard";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { VotingCardChosenComponent } from "../voting-card-chosen/voting-card-chosen.component";
import { VotingCardDataService } from "../voting-card-data.service";

@Component({
  selector: "app-voting-cards-list",
  templateUrl: "./voting-cards-list.component.html",
  styleUrls: ["./voting-cards-list.component.scss"]
})
export class VotingCardsListComponent implements OnInit {
  votingCardList: VotingCard[];
  dialogRef: MatDialogRef<VotingCardChosenComponent>;
  @Input() visibleResults: boolean;
  @Input() enableClick: boolean;
  constructor(
    private votingCardDataService: VotingCardDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.votingCardList = this.votingCardDataService.getVotingCardList();
  }

  openDialog(letter: string) {
    if (this.enableClick) {
      this.dialog.open(VotingCardChosenComponent, {


        data: {
          letter
        }
      });
    }
  }
}

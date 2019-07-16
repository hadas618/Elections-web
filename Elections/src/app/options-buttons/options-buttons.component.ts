import { Component, OnInit } from '@angular/core';
import { CitizenDataService } from '../citizen-data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVoterComponent } from '../update-voter/update-voter.component';
import { CitizenData } from '../CitizenData';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.css']
})
export class OptionsButtonsComponent implements OnInit {

  constructor(private citizenDataService: CitizenDataService, public dialogVoter: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    let citizenData: CitizenData;
    citizenData=this.citizenDataService.getChooseUpdateVoter();
    this.dialogVoter.open(UpdateVoterComponent, {
      data: {
        citizenData }
      });
    }
}

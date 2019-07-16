import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../DialogData';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitizenData } from '../CitizenData';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.sass']
})
export class UpdateVoterComponent implements OnInit {
  citizenData: CitizenData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.citizenData=data.citizenData;
   }

  ngOnInit() {
  }

}

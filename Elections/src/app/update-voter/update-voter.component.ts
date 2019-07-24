import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../DialogData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CitizenData } from '../CitizenData';
import { ActivatedRoute, Router } from '@angular/router';
import { CitizenDataService } from '../citizen-data.service';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.scss']
})
export class UpdateVoterComponent implements OnInit {
  citizenData: CitizenData;
  returnUrl: string;
  okState: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dialogRef: MatDialogRef<UpdateVoterComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private citizenDataService: CitizenDataService) {
   }

  ngOnInit() {
    this.citizenData = this.data.citizenData;
    this.okState = true;
  }

  okChoose() {
    this.citizenDataService.voterState = false;
    this.okState = false;
    this.citizenDataService.updateVoter(this.citizenData.id);
    this.returnUrl = '/voting-board';
    // this.router.navigate([]).then(result => {  window.open(this.returnUrl, '_blank'); });
    this.router.navigate([this.returnUrl]);
    this.dialogRef.close();
  }
  cancelChoose() {
    this.dialogRef.close();
  }
}

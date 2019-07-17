import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../DialogData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CitizenData } from '../CitizenData';
import { ActivatedRoute, Router } from '@angular/router';
import { CitizenDataService } from '../citizen-data.service';

@Component({
  selector: 'app-update-voter',
  templateUrl: './update-voter.component.html',
  styleUrls: ['./update-voter.component.sass']
})
export class UpdateVoterComponent implements OnInit {
  citizenData: CitizenData;
  returnUrl: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dialogRef: MatDialogRef<UpdateVoterComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private citizenDataService:CitizenDataService) {
    this.citizenData=data.citizenData;
   }

  ngOnInit() {
    (<HTMLInputElement> document.getElementById("oKChooseBtn")).disabled = false;
  }

  okChoose()
  {
    (<HTMLInputElement> document.getElementById("oKChooseBtn")).disabled = true;
    (<HTMLInputElement> document.getElementById("updateVoterBtn")).disabled = true;
    this.citizenDataService.updateVoter(this.citizenData.id);
    this.returnUrl = '/voting-board';
    this.router.navigate([]).then(result => {  window.open(this.returnUrl, '_blank'); });
    this.dialogRef.close();
  }
  cancelChoose(){
    this.dialogRef.close();
  }
}

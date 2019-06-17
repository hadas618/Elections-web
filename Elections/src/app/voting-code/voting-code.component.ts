import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voting-code',
  templateUrl: './voting-code.component.html',
  styleUrls: ['./voting-code.component.sass']
})
export class VotingCodeComponent implements OnInit {
  votingCodeForm;
  loading;
  submitted;
  returnUrl;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.votingCodeForm = new FormGroup(
      {
        votingCode: new FormControl()
      });
    this.loading = false;
    this.submitted = false;
  }

  ngOnInit() {
    this.votingCodeForm = this.formBuilder.group({
      votingCode: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get formControls() {
    return this.votingCodeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.votingCodeForm.invalid) {
          return;
    }
    this.loading = true;
    /*this.authenticationService.login(this.formControls.username.value, this.formControls.password.value)
        .pipe(first())
        .subscribe(
            data => {
                  this.router.navigate([this.returnUrl]);
            },
            error => {
                    this.alertService.error(error);
                    this.loading = false;
            });*/
    if (this.formControls.votingCode.value === 'q1w2e3') {
      this.returnUrl = '/voting-board';
    } else {
      this.returnUrl = '/error';
    }
    this.router.navigate([this.returnUrl]);
  }
}

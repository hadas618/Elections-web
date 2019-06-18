import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm;
  loading;
  submitted;
  returnUrl;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService) {
    this.loginForm = new FormGroup(
      {
        id: new FormControl(),
        username: new FormControl(),
        password: new FormControl()
      });
    this.loading = false;
    this.submitted = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
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
    if (this.formControls.username.value === 'admin') {
      if (this.formControls.password.value === 'admin'){
        this.returnUrl = '/voters-list';
      } else {
        this.alertService.error('error');
        this.loading = false;
      }
    } else {
      this.returnUrl = '/voting-code';
    }
    this.router.navigate([this.returnUrl]);
  }
}

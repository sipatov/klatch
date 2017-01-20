import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: any;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        console.log("User signed in: ", auth);
        this.email = auth;
      }
    });
  }

  logout() {
    this.af.auth.logout();
    this.email = undefined;
  }

  onSubmit(f: NgForm) {
    this.af.auth.login(
        { email: f.value.loginEmail , password: f.value.loginPassword},
        { provider: AuthProviders.Password, method: AuthMethods.Password}
      );
  }

  ngOnInit() {

  }
}

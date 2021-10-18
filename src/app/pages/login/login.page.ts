/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    userId:'',
    userFname:'',
    userLname:'',
    userMname:'',
    userDOB:'',
    userEmail:'',
    userPassword:'',
    userImage:'',
    userType:'',
    deactivateStat:'',
    userContactNum:'',
    isVerified:'',
    dInfLicenseNumber:''

    /*
    email:'',
    password:'',
    fullname:'',
    dob:'',
    contactNum:'',
    role:'',
    status:'',
    createAt:'',
    updatedAt:''*/
  }

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.userEmail, this.user.userPassword);
    console.log(user);
    if (user.user.email){
      this.router.navigate(['/home']);
    }else{
      alert('login failed!');
    }
  }
  async register() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.userEmail, this.user.userPassword);
    console.log(user);
    if (user.user.email){
      alert('Registration Successful!');
    }else{
      alert('login failed!');
    }
  }

}

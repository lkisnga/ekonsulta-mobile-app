/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.page.html',
  styleUrls: ['./doctor-register.page.scss'],
})
export class DoctorRegisterPage implements OnInit {
  user={
    docEmail:'',
    docPassword:'',
    docUserType:''
  }

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth) { }
  ngOnInit() {
  }
  async doctorReg() {
    this.user.docUserType = 'Doctor';
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.docEmail, this.user.docPassword);
    console.log(user);
    if (user.user.email){
      alert('Registration Successful!');
    }else{
      alert('Register failed!');
    }
  }
}

/* eslint-disable @typescript-eslint/semi */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.page.html',
  styleUrls: ['./patient-register.page.scss'],
})
export class PatientRegisterPage implements OnInit {
  user={
    email:'',
    password:'',
    userType:''
  }

  constructor(private router: Router,
    public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async patientReg() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(user);
    if (user.user.email){
      this.user.userType = 'Patient'
      alert('Registration Successful!');
      this.router.navigate(['/patient-landing']);
    }else{
      alert('Registration failed!');
    }
  }
}

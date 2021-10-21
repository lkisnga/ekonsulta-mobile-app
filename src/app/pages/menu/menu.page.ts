import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages=[];

  //@ViewChild(Nav) nav: Nav;
  constructor(private authProvider: AngularFireAuth) { }

  ngOnInit() {
  }

  /*  //this function will display side menu content according to user type
  ionViewWillEnter(){
    if(this.authProvider.isDoctor){
      this.pages=[
        {title: 'Patients', page: 'doctor-patients'},
        {title: 'Payments', page: 'doctor-payments'},
        {title: 'Reports', page: 'doctor-reports'},
        {title: 'Schedule', page: 'doctor-schedule'}
      ];
      this.openPage('DoctorLandingPage');
    }
    else{
      this.pages=[
        {title: 'Consultation', page: 'patient-consultation'},
        {title: 'Transaction History', page: 'patient-transactionhistory'},
        {title: 'My Records', page: 'patient-records'}
      ];
      this.openPage('PatientLandingPage');
    }
  }*/

  /*
  openPage(page){
    this.nav.setRoot(page);
  }*/

}

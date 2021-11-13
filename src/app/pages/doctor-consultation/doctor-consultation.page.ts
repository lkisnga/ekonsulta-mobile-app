import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-consultation',
  templateUrl: './doctor-consultation.page.html',
  styleUrls: ['./doctor-consultation.page.scss'],
})
export class DoctorConsultationPage implements OnInit {
  selectTabs= 'upcoming';
  constructor() { }

  ngOnInit() {
  }

}

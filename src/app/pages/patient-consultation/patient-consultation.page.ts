import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-patient-consultation',
  templateUrl: './patient-consultation.page.html',
  styleUrls: ['./patient-consultation.page.scss'],
})
export class PatientConsultationPage implements OnInit {
  selectTabs= 'upcoming';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-myrecords',
  templateUrl: './patient-myrecords.page.html',
  styleUrls: ['./patient-myrecords.page.scss'],
})
export class PatientMyrecordsPage implements OnInit {
  selectTabs= 'medRecords';
  constructor() { }

  ngOnInit() {
  }

}

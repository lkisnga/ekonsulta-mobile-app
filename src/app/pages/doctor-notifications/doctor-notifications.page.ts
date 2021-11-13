import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-doctor-notifications',
  templateUrl: './doctor-notifications.page.html',
  styleUrls: ['./doctor-notifications.page.scss'],
})
export class DoctorNotificationsPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }
  async showAlert() {
    const alert = await this.alertCtrl.create({
    header: 'New Message',
    subHeader: '11/9/2021',
    message: 'Message Body.........',
    buttons: ['Close']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
    }
  ngOnInit() {
  }

}

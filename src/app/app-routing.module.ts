import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register-choice',
    loadChildren: () => import('./pages/register-choice/register-choice.module').then( m => m.RegisterChoicePageModule)
  },
  {
    path: 'doctor-register',
    loadChildren: () => import('./pages/doctor-register/doctor-register.module').then( m => m.DoctorRegisterPageModule)
  },
  {
    path: 'patient-register',
    loadChildren: () => import('./pages/patient-register/patient-register.module').then( m => m.PatientRegisterPageModule)
  },
  {
    path: 'doctor-landing',
    loadChildren: () => import('./pages/doctor-landing/doctor-landing.module').then( m => m.DoctorLandingPageModule)
  },
  {
    path: 'patient-landing',
    loadChildren: () => import('./pages/patient-landing/patient-landing.module').then( m => m.PatientLandingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'patient-profile',
    loadChildren: () => import('./pages/patient-profile/patient-profile.module').then( m => m.PatientProfilePageModule)
  },
  {
    path: 'patient-consultation',
    loadChildren: () => import('./pages/patient-consultation/patient-consultation.module').then( m => m.PatientConsultationPageModule)
  },
  {
    path: 'patient-transactionhistory',
    loadChildren: () => import('./pages/patient-transactionhistory/patient-transactionhistory.module').then( m => m.PatientTransactionhistoryPageModule)
  },
  {
    path: 'patient-doctors-list',
    loadChildren: () => import('./pages/patient-doctors-list/patient-doctors-list.module').then( m => m.PatientDoctorsListPageModule)
  },
  {
    path: 'patient-doctor-chat',
    loadChildren: () => import('./pages/patient-doctor-chat/patient-doctor-chat.module').then( m => m.PatientDoctorChatPageModule)
  },
  {
    path: 'patient-chat-info',
    loadChildren: () => import('./pages/patient-chat-info/patient-chat-info.module').then( m => m.PatientChatInfoPageModule)
  },
  {
    path: 'patient-payment',
    loadChildren: () => import('./pages/patient-payment/patient-payment.module').then( m => m.PatientPaymentPageModule)
  },
  {
    path: 'patient-myrecords',
    loadChildren: () => import('./pages/patient-myrecords/patient-myrecords.module').then( m => m.PatientMyrecordsPageModule)
  },
  {
    path: 'patient-notifications',
    loadChildren: () => import('./pages/patient-notifications/patient-notifications.module').then( m => m.PatientNotificationsPageModule)
  },
  {
    path: 'patient-edit-profile',
    loadChildren: () => import('./pages/patient-edit-profile/patient-edit-profile.module').then( m => m.PatientEditProfilePageModule)
  },
  {
    path: 'doctor-profile',
    loadChildren: () => import('./pages/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'doctor-notifications',
    loadChildren: () => import('./pages/doctor-notifications/doctor-notifications.module').then( m => m.DoctorNotificationsPageModule)
  },
  {
    path: 'doctor-edit-profile',
    loadChildren: () => import('./pages/doctor-edit-profile/doctor-edit-profile.module').then( m => m.DoctorEditProfilePageModule)
  },
  {
    path: 'doctor-consultation',
    loadChildren: () => import('./pages/doctor-consultation/doctor-consultation.module').then( m => m.DoctorConsultationPageModule)
  },
  {
    path: 'doctor-patient-chat',
    loadChildren: () => import('./pages/doctor-patient-chat/doctor-patient-chat.module').then( m => m.DoctorPatientChatPageModule)
  },
  {
    path: 'doctor-chat-info',
    loadChildren: () => import('./pages/doctor-chat-info/doctor-chat-info.module').then( m => m.DoctorChatInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

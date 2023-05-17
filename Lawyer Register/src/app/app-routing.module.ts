import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyerLoginComponent } from './lawyer-login/lawyer-login.component';
import { LawyerRegisterComponent } from './lawyer-register/lawyer-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:"",component:LawyerLoginComponent},
  {path:"lawyer_register",component:LawyerRegisterComponent},
  {path:"forgot_password", component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

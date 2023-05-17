import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LawyerRegisterComponent } from './lawyer-register/lawyer-register.component';
import { FormsModule } from '@angular/forms';
import { LawyerLoginComponent } from './lawyer-login/lawyer-login.component';
import { TalkToALawyerComponent } from './talk-to-a-lawyer/talk-to-a-lawyer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LawyerRegisterComponent,
    LawyerLoginComponent,
    TalkToALawyerComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

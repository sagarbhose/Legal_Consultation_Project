import { NgModule } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { IpcComponent } from './ipc/ipc.component';
import { FormsModule } from '@angular/forms';
import { DisplayIpcComponent } from './display-ipc/display-ipc.component';
import { UserComponent } from './user/user.component';
import { GoogleSigninButtonModule } from "@abacritt/angularx-social-login";
import { HomeComponent } from './home/home.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { LawyerLoginComponent } from './lawyer-login/lawyer-login.component';
import { LawyerRegisterComponent } from './lawyer-register/lawyer-register.component';
import { FindComponent } from './find/find.component';
import { TalkToALawyerComponent } from './talk-to-a-lawyer/talk-to-a-lawyer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { LawyerUpdateComponent } from './lawyer-update/lawyer-update.component';
import { LawyerAnswerComponent } from './lawyer-answer/lawyer-answer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllquestionComponent } from './allquestion/allquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    IpcComponent,
    DisplayIpcComponent,
    SignInComponent,
    UserComponent,
    HomeComponent,
    HomeCardsComponent,
    LawyerLoginComponent,
    LawyerRegisterComponent,
    FindComponent,
    TalkToALawyerComponent,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    ForgotpasswordComponent,
    AskQuestionComponent,
    LawyerComponent,
    LawyerUpdateComponent,
    LawyerAnswerComponent,
    AllquestionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers:[
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '782609786425-2psmtlbevpjlvplm05m7ek5c9vprjg23.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

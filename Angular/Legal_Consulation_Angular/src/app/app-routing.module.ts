import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpcComponent } from './ipc/ipc.component';
import { DisplayIpcComponent } from './display-ipc/display-ipc.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindComponent } from './find/find.component';
import { LawyerLoginComponent } from './lawyer-login/lawyer-login.component';
import { LawyerRegisterComponent } from './lawyer-register/lawyer-register.component';
import { TalkToALawyerComponent } from './talk-to-a-lawyer/talk-to-a-lawyer.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LawyerComponent } from './lawyer/lawyer.component';
import { LawyerUpdateComponent } from './lawyer-update/lawyer-update.component';
import { AllquestionComponent } from './allquestion/allquestion.component';
import { LawyerAnswerComponent } from './lawyer-answer/lawyer-answer.component';
import { ForumComponent } from './forum/forum.component';
import { LawyerDisplayComponent } from './lawyer-display/lawyer-display.component';
import { LawyerProfileComponent } from './lawyer-profile/lawyer-profile.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"app-ipc",component:IpcComponent},
  {path:"DisplayIpc",component:DisplayIpcComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"User",component:UserComponent},
  {path:"",component:HomeComponent},
  {path:"app-home-cards",component:HomeCardsComponent},
  {path:"app-login",component:LoginComponent},
  {path:"app-register",component:RegisterComponent},
  {path:"FindPassword",component:FindComponent},
  {path:"app-lawyer-login",component:LawyerLoginComponent},
  {path:"app-lawyer-register",component:LawyerRegisterComponent},
  {path:"app-talk-to-a-lawyer",component:TalkToALawyerComponent},
  {path:"Ask-Question",component:AskQuestionComponent},
  {path:"ForgotPassword",component:ForgotpasswordComponent},
  {path:"Lawyer",component:LawyerComponent},
  {path:"Lawyer-Update",component:LawyerUpdateComponent},
  {path:"Otp",component:OtpComponent},
  {path:"Allquestion",component:AllquestionComponent},
  {path:"Lawyer-answer",component:LawyerAnswerComponent},
  {path:"Forum",component:ForumComponent},
  {path:"Display-Lawyer",component:LawyerDisplayComponent},
  {path:"Display-Profile",component:LawyerProfileComponent},
  {path:"Footer",component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

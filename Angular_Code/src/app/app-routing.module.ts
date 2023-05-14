import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpcComponent } from './ipc/ipc.component';
import { DisplayIpcComponent } from './display-ipc/display-ipc.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:IpcComponent},
  {path:"DisplayIpc",component:DisplayIpcComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"User",component:UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

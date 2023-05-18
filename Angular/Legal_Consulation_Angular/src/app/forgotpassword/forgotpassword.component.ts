import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  UserOtp:any
  formData:any = {};
  Otp:any
  emailid:any
  constructor(private ipcserv:IpcService,private route:Router){

  }
  onSubmit(){
    this.UserOtp=this.formData.Otp
    this.SendAndGetOtp(this.UserOtp)
  }
  SendAndGetOtp(val:any){
    return this.ipcserv.SendNGetOtp(val).subscribe((Otp:any) => {
      this.ipcserv.setOtp(Otp)
      console.log(Otp)
      this.route.navigateByUrl("/Otp")
    });
  }
}


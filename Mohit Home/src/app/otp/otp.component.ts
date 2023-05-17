import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  RecOtp:any
  UserOtp:any
  formData:any = {};
  constructor(private ipcserv:IpcService,private route:Router){

  }
  
  onSubmit(){
    this.RecOtp=this.ipcserv.getOtp()
    this.UserOtp=this.formData.Otp
    if(this.RecOtp==this.UserOtp){
      this.route.navigateByUrl("/User")
    }
    else{
      this.route.navigateByUrl("/Otp")
    }
  }
}

import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-lawyer-login',
  templateUrl: './lawyer-login.component.html',
  styleUrls: ['./lawyer-login.component.css']
})
export class LawyerLoginComponent {
  user: any;
  loggedIn: any;
  formData:any = {};
  credentials:any
  client:any
  constructor(private authService: SocialAuthService,private route:Router,private ipcserv:IpcService) { }
  onSubmit(){
    this.credentials=this.formData.email+" "+this.formData.password
    this.getUserByCred()
  }

  getUserByCred(){
    return this.ipcserv.getCredLawyer(this.credentials).subscribe((data)=>{
      console.log(data)
        this.client=data;
        if(this.client!=null){
          this.ipcserv.setLawyer(this.client)
          this.route.navigateByUrl("/Lawyer")
        }
        else{
          alert("Lawyer not found")
        }
    });
  }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      if(user!=null){
        this.ipcserv.setLawyer(this.user)
        this.route.navigateByUrl("Lawyer")
      }
    });
  }
}

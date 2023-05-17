import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IpcService } from "../ipc.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
    return this.ipcserv.getCredclient(this.credentials).subscribe((data:any)=>{
      console.log(data)
        this.client=data;
        if(this.client!=null){
          this.ipcserv.setuser(this.client)
          this.ipcserv.setUserLoggedIn();
          this.route.navigateByUrl("User")
        }
        else{
          alert("User not found")
        }
    });
  }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      if(user!=null){
        this.route.navigateByUrl("User")
      }
    });
  }

}

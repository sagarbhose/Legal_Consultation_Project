import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: any = {};
  User: any;
  constructor(private ipcserv:IpcService,private route:Router){

  }
  onSubmit() {
    console.log(this.formData)
    this.User=this.formData;
    this.insertNewUser();
  }

  insertNewUser(){
    return this.ipcserv.insertUser(this.User).subscribe(() => {
          this.route.navigateByUrl("/app-login")
        });
  }
}

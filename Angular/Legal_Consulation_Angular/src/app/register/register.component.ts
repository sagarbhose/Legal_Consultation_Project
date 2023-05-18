import { Component,OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  User: any;
  fetchemail:any
  constructor(private ipcserv:IpcService,private route:Router){

  }
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.ipcserv.getClientByEmail(this.formData.cemail).subscribe((data)=>{
      if(data!=null){
        alert("Email is Already Registered please enter different email")
      }
      else{
        this.insertNewUser();
      }
    })
    
  }

  insertNewUser(){
    return this.ipcserv.insertUser(this.formData).subscribe(() => {
          alert("User Register Successful")
          this.route.navigateByUrl("/app-login")
        });
  }
}

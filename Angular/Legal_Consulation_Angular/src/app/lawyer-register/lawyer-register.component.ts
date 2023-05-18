import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lawyer-register',
  templateUrl: './lawyer-register.component.html',
  styleUrls: ['./lawyer-register.component.css']
})
export class LawyerRegisterComponent {
  formData: any = {};
  User: any
  constructor(private ipcserv:IpcService,private route:Router){

  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.ipcserv.getLawyerByEmail(this.formData.lemail).subscribe((data)=>{
      if(data!=null){
        alert("Email is Already Registered please enter different email")
      }
      else{
        this.insertLawyer();
      }
    })
  }

  insertLawyer(){
    this.ipcserv.insertLaywer(this.formData).subscribe(()=>{  
      this.route.navigateByUrl("/app-lawyer-login") 
      alert("Lawyer Added Sucessfully")
    });
  }
}

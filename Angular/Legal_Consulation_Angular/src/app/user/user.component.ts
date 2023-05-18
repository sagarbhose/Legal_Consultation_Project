import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  user:any
  userloggedin:boolean;
  constructor(private ipcserc:IpcService,private route:Router){
      this.userloggedin=false;

  }

  deleteUser() {
    this.user=this.ipcserc.getUser();
    console.log(this.user.cid)
   this.ipcserc.deleteUser(this.user.cid).subscribe(()=>{
    this.route.navigateByUrl("")
   })
  }

  Logout(){
    this.userloggedin=false;
    this.route.navigateByUrl("")
  }

  ngOnInit(): void {
   this.userloggedin=this.ipcserc.getUserLoggedIn()
  }
    userName: string = 'Sagar'; // Replace with the actual user name
  
    getWelcomeMessage(): string {
      return `Welcome, ${this.userName}!`; // Customize the welcome message as needed
    }
}

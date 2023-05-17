import { Component, OnInit } from '@angular/core';
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userloggedin:boolean;
  constructor(private ipcserc:IpcService){
      this.userloggedin=false;
  }
  ngOnInit(): void {
   this.userloggedin=this.ipcserc.getUserLoggedIn()
  }

}

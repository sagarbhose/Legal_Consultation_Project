import { Component,OnInit} from '@angular/core';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-talk-to-a-lawyer',
  templateUrl: './talk-to-a-lawyer.component.html',
  styleUrls: ['./talk-to-a-lawyer.component.css']
})
export class TalkToALawyerComponent implements OnInit {
  lawyer:any
  selectedLawyer:any
  constructor(private ipcserv:IpcService){

  }
  ngOnInit(): void {
   this.ipcserv.getAllLawyers().subscribe((users)=>{
    this.lawyer=users
   })
  }
  display(name:any){
    console.log(name)
  }
  onsubmit(){
    console.log(this.selectedLawyer.lname)
  }
}

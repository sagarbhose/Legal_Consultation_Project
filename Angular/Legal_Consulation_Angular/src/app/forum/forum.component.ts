import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  formData:any=[]
  constructor(private ipcser:IpcService,private route:Router){
  }
  ngOnInit(): void {
   this.ipcser.getAllForum().subscribe((data)=>{
      this.formData=data;
   });
  }

}

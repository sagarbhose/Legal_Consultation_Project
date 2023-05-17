import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-lawyer-update',
  templateUrl: './lawyer-update.component.html',
  styleUrls: ['./lawyer-update.component.css']
})
export class LawyerUpdateComponent implements OnInit {
  formData: any
  User: any
  constructor(private ipcserv:IpcService){

  }
  ngOnInit(): void {
    this.formData=this.ipcserv.getLawyer()
    console.log(this.ipcserv.getLawyer())
  }
  onSubmit() {

  }
}

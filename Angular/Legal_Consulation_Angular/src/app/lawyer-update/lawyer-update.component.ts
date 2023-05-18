import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { OnSameUrlNavigation, Router } from '@angular/router';

@Component({
  selector: 'app-lawyer-update',
  templateUrl: './lawyer-update.component.html',
  styleUrls: ['./lawyer-update.component.css']
})
export class LawyerUpdateComponent implements OnInit {
  formData: any
  User: any
  constructor(private ipcserv:IpcService,private route:Router){

  }
  ngOnInit(): void {
    this.formData=this.ipcserv.getLawyer()
    console.log(this.formData)
  }
  onSubmit() {
    this.ipcserv.updateLawyer(this.formData).subscribe(()=>{        
    });
    this.route.navigateByUrl("/Lawyer")
  }
}

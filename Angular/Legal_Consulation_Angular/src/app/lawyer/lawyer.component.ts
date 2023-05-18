import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent {
  lawyer: any
  constructor(private lserv: IpcService, private route: Router) {

  }

  deleteLawyer() {
    this.lawyer = this.lserv.getLawyer();
    console.log(this.lawyer.lid)
    this.lserv.deleteLawyer(this.lawyer.lid).subscribe(() => {
      this.route.navigateByUrl("")
    })
  }
}

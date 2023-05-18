import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-lawyer-display',
  templateUrl: './lawyer-display.component.html',
  styleUrls: ['./lawyer-display.component.css']
})
export class LawyerDisplayComponent {
  lawyers: any;

  lawyerdetails : any

  constructor(private lpcserv : IpcService) {
   }

  ngOnInit() {
   
    this.getLawyersInfo()
  }


  getLawyersInfo()
  {
    this.lpcserv.getAllLawyers().subscribe((data:any)=>{
      this.lawyerdetails=data
    })
  }
}

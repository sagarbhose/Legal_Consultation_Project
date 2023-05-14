import { Component, EventEmitter, Output } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ipc',
  templateUrl: './ipc.component.html',
  styleUrls: ['./ipc.component.css']
})
export class IpcComponent {
  ipc_f: any
  ipc_b:any
   id:any

  submitform(reg:any){
    this.id=reg.ipc_f
    this.getIpcByIpcCode(this.id)
  }



    ipcList: any[] = [];
  
    constructor(private ipcService: IpcService,private route:Router) {
      //this.getIpc();
    }
  
    ngOnInit(): void {
      this.getIpc();
    }
  
    getIpcByIpcCode(val: any) {
      return this.ipcService.getIpcById(val).subscribe(
        (data: any) => {
          this.ipcService.setterIpc(data)
          this.route.navigateByUrl("DisplayIpc")
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
    }

    getIpc(): void {
      this.ipcService.getipc().subscribe(
        (data: any[]) => {
          this.ipcList = data;
          //console.log(this.ipcList)
        },
        (error: any) => {
          console.error('Error retrieving IPC data:', error);
        }
      );
    }
  }

  
  
  
  
  
  
  

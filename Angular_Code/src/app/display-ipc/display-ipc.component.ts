import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-display-ipc',
  templateUrl: './display-ipc.component.html',
  styleUrls: ['./display-ipc.component.css']
})
export class DisplayIpcComponent {
  ipc_b:any
    constructor(private ipcService: IpcService) {
    }
  
    ngOnInit(): void {
      this.getIpcByIpcCode();
    }
    getIpcByIpcCode() {
      this.ipc_b= this.ipcService.getterIpc();
    }
  }
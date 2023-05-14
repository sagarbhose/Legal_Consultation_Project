import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpcService {
  Ipc:any
  constructor(private http: HttpClient) {}

  getterIpc(){
    return this.Ipc;
  }
  setterIpc(obj:any){
    this.Ipc=obj
  }
  getipc() {
    return this.http.get<any[]>("ipc/List");
  }

  getIpcById(ipc: any) {
    return this.http.get<any[]>("ipc/List/" + ipc);
  }
}
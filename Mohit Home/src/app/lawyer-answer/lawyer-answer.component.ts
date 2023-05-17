import { Component } from '@angular/core';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-lawyer-answer',
  templateUrl: './lawyer-answer.component.html',
  styleUrls: ['./lawyer-answer.component.css']
})
export class LawyerAnswerComponent {
  formData: any = {};
  answer:any

  constructor(private ipcserv:IpcService){

  }

  onSubmit(){
    this.answer=this.formData.answer
    this.ipcserv.insertAnswer(this.answer).subscribe(()=>{
      alert("Answer updated sucessfully");
    });
  }
}

import { Component,OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lawyer-answer',
  templateUrl: './lawyer-answer.component.html',
  styleUrls: ['./lawyer-answer.component.css']
})
export class LawyerAnswerComponent implements OnInit {
  formData: any = {};
  answer:any
  constructor(private ipcserv:IpcService,private Route:Router){

  }
  ngOnInit(): void {
    console.log(this.ipcserv.getqueid())
    this.ipcserv.getQuestionById(this.ipcserv.getqueid()).subscribe((data:any)=>{
      console.log(data)
      this.formData=data
    })
    
  }

  onSubmit(){
    this.answer=this.formData.answer
    this.ipcserv.insertForum(this.formData).subscribe(()=>{
      alert("Answer updated sucessfully");
      this.ipcserv.deleteQuestionById(this.formData.qid).subscribe(()=>{
        alert("Question Resolve SucessFully")
        this.Route.navigateByUrl("Allquestion")
      })
    });
  }
}

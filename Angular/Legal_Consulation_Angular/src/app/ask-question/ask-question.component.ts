import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  formData: any = {};

  constructor(private ipcserv:IpcService,private route:Router)
  {

  }

  ngOnInit(): void {
   
  }

  onSubmit()
  {
    this.ipcserv.insertQuestion(this.formData).subscribe(()=>{
        alert("Question Sent Successfully!")
        this.route.navigateByUrl("/")
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allquestion',
  templateUrl: './allquestion.component.html',
  styleUrls: ['./allquestion.component.css']
})
export class AllquestionComponent implements OnInit{
  formData:any=[]
  constructor(private ipcser:IpcService,private route:Router){


  }
  deletequestionbyId(id:any){
    this.ipcser.deleteQuestionById(id).subscribe(()=>{
     return this.ngOnInit()
    }); 
  }

  giveans(qid:any){
    this.ipcser.setqueid(qid);
    this.route.navigateByUrl("/Lawyer-answer");
  }

  ngOnInit(): void {
    this.getAllQuestion()
  }
  getAllQuestion(){
    return this.ipcser.getAllQuestion().subscribe((data:any)=>{
      console.log(data)
        this.formData=data
    })
  }
}

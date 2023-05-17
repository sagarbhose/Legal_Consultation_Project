import { Component, OnInit } from '@angular/core';
import { IpcService } from '../ipc.service';

@Component({
  selector: 'app-allquestion',
  templateUrl: './allquestion.component.html',
  styleUrls: ['./allquestion.component.css']
})
export class AllquestionComponent implements OnInit{
  formData:any=[]
  constructor(private ipcser:IpcService){

  }
  deletequestionbyId(id:any){
    this.ipcser.deleteQuestionById(id).subscribe(()=>{
     return this.ngOnInit()
    });
    
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

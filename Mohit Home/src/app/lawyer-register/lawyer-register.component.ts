import { Component } from '@angular/core';

@Component({
  selector: 'app-lawyer-register',
  templateUrl: './lawyer-register.component.html',
  styleUrls: ['./lawyer-register.component.css']
})
export class LawyerRegisterComponent {
  formData: any = {};
  User: any={}
  onSubmit() {
    console.log(this.formData);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
    userName: string = 'John Doe'; // Replace with the actual user name
  
    getWelcomeMessage(): string {
      return `Welcome, ${this.userName}!`; // Customize the welcome message as needed
    }
}

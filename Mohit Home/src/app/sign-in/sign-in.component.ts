
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GoogleSigninButtonModule } from "@abacritt/angularx-social-login";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService,private route:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user)
      if(user!=null){
        this.route.navigateByUrl("User")
      }
    });
  }


}

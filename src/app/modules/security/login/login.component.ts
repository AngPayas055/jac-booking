import { Component } from '@angular/core';
import { LoginModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(
    private userService: UserService,
    // private router: Router,
    // private message: MessageService
    ) { }
  user: LoginModel = {
    Password: "",
    Email: "",
  };
  
  public async submit(){
    (await this.userService.Login(this.user)).subscribe(
      response => {
        let result = response;
        console.log('res',result)

        // this.message.add({
        //   severity: 'success',
        //   summary: 'Register Successful',
        //   detail: 'You have successfully register for your new account!'});
        // setTimeout(() => {
        //   this.router.navigate(['/security/login']);
        // }, 1000);
      },
      error => {
        console.log('error',error)
        if (error.status == '400') {
        }
        else {
        }
      }
    )
  }
}

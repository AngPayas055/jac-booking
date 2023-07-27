import { Component } from '@angular/core';
import { RegistrationModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(
    private userService: UserService,
    // private router: Router,
    // private message: MessageService
    ) { }
    
  gender:any [] = [
    { name: 'Male', code: 'M' },
    { name: 'Female', code: 'F' }
  ]

  
  user: RegistrationModel = {
    Id: 0,
    Password: "",
    Phone: "",
    Email: "",
    IsActive: true,
    IsLocked: false,
    Birthday: new Date(),
    FirstName: "",
    LastName: "",
    Gender: ""
  };

  public async submit(){
    (await this.userService.RegisterUserWithLock(this.user)).subscribe(
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

import { Component } from '@angular/core';
import { RegistrationModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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

  submit(){
    console.log(this.user)
  }
}

import { Component } from '@angular/core';
import { RegistrationModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[MessageService]
})
export class RegisterComponent {
  
  constructor(
    private userService: UserService,
    private router: Router,
    private message: MessageService
    ) { }
    
  isSubmitDisabled: boolean = true;
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
        let result: any = response;
        console.log('res',result)
        if(result.isSuccess == false){
          this.message.add({
            severity: 'error',
            summary: 'Error',
            detail: result.message});
          // setTimeout(() => {
          //   this.router.navigate(['/security/login']);
          // }, 1000);

        }else{
          this.message.add({
            severity: 'success',
            summary: 'Success',
            detail: result.message});
          setTimeout(() => {
            this.router.navigate(['/security/login']);
          }, 1000);

        }
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
  fieldValidation(){
    if (this.user.FirstName.length <= 6){
      this.message.add({
        severity: 'error',
        summary: 'Error',
        detail: ""});

    }
  }
}

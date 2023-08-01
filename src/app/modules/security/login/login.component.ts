import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {
  
  constructor(
    private userService: UserService,
    private router: Router,
    private message: MessageService
    ) { }
  user: LoginModel = {
    Password: "",
    Email: "",
  };
  
  public async submit(){
    (await this.userService.Login(this.user)).subscribe(
      response => {
        let result: any = response;
        console.log('res',result)
        if(result.isSuccess == false){
          this.message.add({
            severity: 'error',
            summary: 'Error',
            detail: result.message});
        }else{
          this.message.add({
            severity: 'success',
            summary: 'Success',
            detail: "Login Success"});
          setTimeout(() => {
            this.router.navigate(['/admin/dashboard']);
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
}

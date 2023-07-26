import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private appSettings: AppSettings,
    private httpClient: HttpClient
    ) { }

  
  public async RegisterUserWithLock(objUser: any) {
    return this.httpClient.post(this.appSettings.APIURLHost + '/api/Registration/registration', JSON.stringify(objUser), this.appSettings.publicOptions);
  }
}

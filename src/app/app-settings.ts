import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

const default_api_url = 'https://localhost:44354';
// const default_api_url = 'http://192.168.0.102:8081';

export class AppSettings {
    public APIURLHost = environment.APIURLHost || default_api_url;

    // URL Encoded Options
    public urlEncodedOptions: any = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept':'application/json'
        })
      };

    // Default Options
    public defaultOptions: any = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        })
    };
  }

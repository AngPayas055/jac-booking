export class RegistrationModel {
    Id:  number = 0;
    Password:  string = "";
    Phone: string = "";
    Email: string = "";    
    IsActive: boolean = true;
    IsLocked: boolean = false;
    Birthday: Date = new Date();
    FirstName:  string = "";
    LastName:  string = "";
    Gender:  string = "";
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private allowedCredentials = [
    { userid: 'alivamishra13', password: 'aliva130' },
    { userid: 'user2', password: 'password2' }
  ];
  userid: string ='';
  password: string ='';

  constructor(private router: Router) { }

  login(): void {
    if (this.validateCredentials(this.userid, this.password)) {
      this.router.navigate(['/homepage']);
    } else {
      console.log("Invalid Credentials");
    }
  }

  validateCredentials(username: string, password: string): boolean {
    for (const credentials of this.allowedCredentials) {
      if (credentials.userid === username && credentials.password === password) {
        return true;
      }
    }
    return false;
  }
}



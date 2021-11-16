import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string
  public password: string
  public errorMessage: string 
  
  constructor(private route: Router, public userService: UserService) { 
    this.email = ''
    this.password = ''
    this.errorMessage = ''
  }

  ngOnInit(): void {}

  public isError():boolean{ 
    return this.errorMessage.length > 1
  }

  public login():void{ 
    if (this.email.length > 1 && this.password.length > 1){ 
      this.userService.login(this.email, this.password).subscribe((data: User) => {     
          this.userService.saveUserInLocalStorage(data)
          this.route.navigate(['']) // Navigate to the home page
      },
      (error) => { 
        this.errorMessage = error.error
      })
    }
  }

}

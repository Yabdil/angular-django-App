import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  isError():boolean{ 
    return this.errorMessage.length > 1
  }

  login():void{ 
    if (this.email.length > 5 && this.password.length > 5){ 
    }else{ 
      this.route.navigate(['/'])
    }
  }

}

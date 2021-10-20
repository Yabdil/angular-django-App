import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = ''
  public password: string = ''
  public errorMessage: string = ''
  constructor(private route: Router, public userService: UserService) { }

  ngOnInit(): void {}

  isError():boolean{ 
    return this.errorMessage.length > 1
  }

  login():void{ 
    if (!this.isError()){ // Checking we dont have error msg
      console.log('Tringto log in')
    }
      this.route.navigate(['/'])
  }

}

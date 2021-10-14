import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public firstName: string = ''
  public msgError: string = 'ss'
  constructor(private route: Router, public userService: UserService) { }

  ngOnInit(): void {

  }

  isError():boolean{ 
    return this.msgError.length > 1
  }

  login():void{ 
    if (this.firstName.length > 5){ 
      let name = this.firstName.slice(0,5)
      console.log(name)
      this.userService.firstName = name
      this.route.navigate(['/'])
    }
  }

}

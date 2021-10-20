import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private itemService: ItemService, private userService: UserService) { }

  ngOnInit(): void {
  }

  logOut():void{ 
    this.itemService.showModel = true
  }
  get fullName():string{ 
    return `${this.userService.firstName} ${this.userService.lastName}`
  }

}

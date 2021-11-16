import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private route: Router, public itemService: ItemService, private userService: UserService) { 
  }

  ngOnInit(): void {
  }
  confirmLogOut():void{ 
    this.userService.logout().subscribe(() => { 
      this.userService.deleteUerInLocalStorage()
      this.route.navigate(['/login'])
      this.itemService.showModel = false
    })
    
  }

  cancelLogOut():void{ 
    setTimeout(() => { 
      this.itemService.showModel = false
    },500)
  }
}

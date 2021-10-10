import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private route: Router, public itemService: ItemService) { 
  }

  ngOnInit(): void {
  }
  confirmLogOut():void{ 
    console.log("we are logging out")
    setTimeout(() => { 
      this.route.navigate(['login'])
      },500)
    this.itemService.showModel = false
    
  }

  cancelLogOut():void{ 
    console.log("Not logging out")
    setTimeout(() => { 
      this.itemService.showModel = false
    },500)
  }
}

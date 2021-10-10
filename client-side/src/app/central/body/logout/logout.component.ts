import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  show: boolean = true
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  confirmLogOut():void{ 
    console.log("we are logging out")
    setTimeout(() => { 
      this.route.navigate(['login'])
      },500)
    
  }

  cancelLogOut():void{ 
    console.log("Not logging out")
    setTimeout(() => { 
      this.show = false
    },500)
  }
}

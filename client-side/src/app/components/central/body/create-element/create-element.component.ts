import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
  str: string = ''
  show: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  add(){ 
    console.log(this.str)
    this.show = !this.show
  }

}

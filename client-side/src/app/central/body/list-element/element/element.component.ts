import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../../../models/item.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() item!: Item;
  constructor() {
    
   }

  ngOnInit(): void {
  }

  delete():void{ 
    
  }

  changeStateOfElement():void{ 
    this.item.isFinished = !this.item.isFinished
  }

}


import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../../../../../models/item.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() item!: Item;
  @Output() deleteItem = new EventEmitter<Item>()

  constructor() {
   }

  ngOnInit(): void {
  }

  delete():void{ 
    this.deleteItem.emit(this.item)
  }

  changeStateOfElement():void{ 
    this.item.isFinished = !this.item.isFinished
  }

}


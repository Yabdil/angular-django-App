import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from '../../../../../models/item.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() item!: Item;
  @Output() deleteItem = new EventEmitter<number>()

  constructor() {
   }

  ngOnInit(): void {
  }

  delete():void{ 
    this.deleteItem.emit(this.item.id)
  }

  changeStateOfElement():void{ 
    this.item.is_finished = !this.item.is_finished
  }

}


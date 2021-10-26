import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from '../../../../models/item.model';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {

   items!: Item[]
  constructor(public itemsService: ItemService) {
   }

  ngOnInit(): void {
    this.items = this.itemsService.getItems()
  }

  trackByIdItem(index: number, item: Item): number {  
      return item.id
  }

  delete(item:Item):void{ 
    this.itemsService.deleteItem(item)
    this.items = this.itemsService.getItems()
  }

}





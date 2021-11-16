import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item/item.service';
import { Item } from '../../../../models/item.model';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {

   public items!: Item[]
  constructor(public itemsService: ItemService) {
   }

  ngOnInit(): void {
    this.getItems()
  }

  public getItems():void{ 
    this.itemsService.getItems().subscribe((resuts:Item[]) => { 
      this.items = resuts
    })
  }

  public trackByIdItem(index: number, item: Item): number {  
      return item.id!
  }

  public addItem(newItem: Item):void{
    console.log(newItem)
    this.itemsService.addItem(newItem).subscribe((data: Item) => { 
      this.getItems()
    },
    (error) => {
      console.log(error)
    })
  }

  public deleteItem(id:number):void{ 
    this.itemsService.deleteItem(id).subscribe((msg:any) => { 
      this.getItems()
    })
    
  }

}





import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
  public newItemDescription: string = ''
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  add(){ 
    console.log(this.newItemDescription)
    let newItem: Item = { 
      id: 0,
      description: this.newItemDescription,
      isFinished: false,
      createdBy: 0,
      dateCreated: new Date()
    }
    this.itemService.addItem(newItem)
    this.newItemDescription = ''
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item/item.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-create-element',
  templateUrl: './create-element.component.html',
  styleUrls: ['./create-element.component.css']
})
export class CreateElementComponent implements OnInit {
  public newItemDescription: string = ''
  @Output() addItem = new EventEmitter<Item>()
  constructor(private itemService: ItemService, private user: UserService) { }

  ngOnInit(): void {
  }

  add():void{ 
    let user = this.user.getUser()
    let id = user ? user.id: 0
    let newItem: Item = {
      description: this.newItemDescription,
      is_finished: false,
      created_by: id
    }
    this.addItem.emit(newItem)
    this.newItemDescription = ''
  }

}

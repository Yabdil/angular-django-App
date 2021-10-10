import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  showModel: boolean
  constructor(private user: UserService) { 
    this.showModel = false
  }

  getItems():Item[]{ 
    return items
  }
}

const items: Item[] = [ 
  {
    id:1,
    description: 'First Element Of a long night from where i was buying',
    isFinished: false,
    createdBy: 7,
    dateCreated: new Date()
  },
  {
    id:2,
    description: 'Second Element',
    isFinished: true,
    createdBy: 5,
    dateCreated: new Date()
  },
  {
    id:3,
    description: 'Third Element',
    isFinished: false,
    createdBy: 7,
    dateCreated: new Date()
  }
]
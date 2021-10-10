import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public firstName: string = ''
  public lastName: string = 'Kerman'
}

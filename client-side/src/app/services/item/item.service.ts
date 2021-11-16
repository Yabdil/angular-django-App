import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { Item } from 'src/app/models/item.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public showModel: boolean
  private readonly url: string = environment.url

  constructor(private user: UserService, private http: HttpClient) { 
    this.showModel = false
  }

  getItems():Observable<Item[] | any>{ 
    const url: string = `${this.url}/items`
    return this.http.get<Item[]>(url, this.getHttpOptions())
        .pipe(
          retry(3), 
          catchError(this.handleError)
        );
  }

  addItem(item:Item):Observable<Item[] | any>{ 
    const url: string = `${this.url}/items`
    const data = JSON.stringify(item)
    return this.http.post<Item>(url, data, this.getHttpOptions())
        .pipe(
          retry(3), 
          catchError(this.handleError)
        )
  }

  deleteItem(id:number):Observable<string | unknown>{ 
    const url: string = `${this.url}/item/${id}`
    return this.http.delete<string | unknown>(url, this.getHttpOptions())
        .pipe(
          retry(3), 
          catchError(this.handleError)
        )
  }

  public getHttpOptions():any{ 
    const token = this.user.getTokenFromLocalStorage()
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Token ' + token}), 
    }
    return httpOptions
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400 || error.status === 500) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}



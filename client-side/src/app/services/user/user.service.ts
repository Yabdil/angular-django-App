import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = environment.url
  constructor(private http: HttpClient) {}

  login(email:string, password:string):Observable<User>{ 
    const data = JSON.stringify({email:email, password:password})
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<User>(`${this.url}/login`, data, httpOptions)
  }

  public saveUserInLocalStorage(data:User):void{ 
    window.localStorage.setItem('user', JSON.stringify(data))
  }

  public getUser():User|null{ 
    const result = window.localStorage.getItem('user')
    if (result){ 
      return JSON.parse(result)
    }
    return null
  }

  public deleteUerInLocalStorage():void{ 
    window.localStorage.clear()
  }

  public getTokenFromLocalStorage(): string|null{ 
    const user = this.getUser()
    if (user){ 
      const token: string = user.token
      return token
    }
    return null
  }

  /*
    get the fullName of the connected user from the localstorage
  */
  public getFullName(): string|null{
    const user = this.getUser()
    if (user){ 
      return `${user.firstName} ${user.lastName}`
    }
    return null
  } 

  public logout(): Observable<any|HttpErrorResponse>{
    const token = this.getTokenFromLocalStorage() || ''
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const options = new HttpParams().set('token', token)
    const url = `${this.url}/logout?${options.toString()}`
    return this.http.get<any|HttpErrorResponse>(url,httpOptions).pipe()

  }
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myUsersApiUrls:string = 'https://jsonplaceholder.typicode.com/users';
  myCommentsApiUrls:string = 'https://jsonplaceholder.typicode.com/comments';
  myAlbumsApiUrls:string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http:HttpClient){}

  getAllDetailsList(){
    return forkJoin({
      users:this.http.get(this.myUsersApiUrls),
      comments:this.http.get(this.myCommentsApiUrls),
      albums:this.http.get(this.myAlbumsApiUrls)
    })
  }
}

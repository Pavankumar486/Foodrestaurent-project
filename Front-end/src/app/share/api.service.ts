import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 

  constructor(private _http: HttpClient) { }

  //add  the user details by post method
  postUser(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any) => {
     return res;
    }))
  }


  // get the all user details by using get method
  getUsers(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any) => {
     return res;
    }))
  }


  //update the user details by the put method
  updateUser(data:any, id: number){
    return this._http.put<any>("http://localhost:3000/posts/"+id, data).pipe(map((res:any) => {
     return res;
    }))
  }


  //delete the user details by the delete method
  deleteUser(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any) => {
     return res;
    }))
  }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

 

  constructor(private _http: HttpClient) { }

  //add  the user details by post method
  postOrder(data:any){
    return this._http.post<any>("http://localhost:3000/orders", data).pipe(map((res:any) => {
     return res;
    }))
  }


  // get the all user details by using get method
  getOrders(){
    return this._http.get<any>("http://localhost:3000/orders").pipe(map((res:any) => {
     return res;
    }))
  }


  //update the user details by the put method
  updateOrder(data:any, id: number){
    return this._http.put<any>("http://localhost:3000/orders/"+id, data).pipe(map((res:any) => {
     return res;
    }))
  }


  //delete the user details by the delete method
  deleteOrder(id:number){
    return this._http.delete<any>("http://localhost:3000/orders/"+id).pipe(map((res:any) => {
     return res;
    }))
  }

}


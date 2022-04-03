import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../order.service';
import { OrderModel } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  formValue !:FormGroup;
  orderModelObj : OrderModel = new OrderModel(); 
  orderData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  
  constructor(private formBuilder:FormBuilder, private order:OrderService){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      food:[' '],
      tag:[' '],
      phone: [' '],
      addres:[' '],

    })
  this.getAllOrders()
  }

  clickAddOrder(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postOrderDetails(){ // done post api
    this.orderModelObj.food = this.formValue.value.food;
    this.orderModelObj.tag = this.formValue.value.tag;
    this.orderModelObj.phone = this.formValue.value.phone;
    this.orderModelObj.addres = this.formValue.value.addres;

    this.order.postOrder(this.orderModelObj).subscribe(res=>{
      console.log(res);
      alert("User registered successfully ✍")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOrders() // for instance update data
    },
      err =>{
      alert ("something went wrong,  please check ✘")
    })


}

  // get all user details
  getAllOrders() { 
    this.order.getOrders().subscribe(res=>{
      this.orderData = res;
    })
  }

   //delete all user details
deleteOrders(o:any){
  this.order.deleteOrder(o.id).subscribe(res=>{
    alert("User record deleted 👍 ")
    this.getAllOrders()// get the instaance data
  })
}

onEdit(o:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.orderModelObj.id=o.id;
  this.formValue.controls['food'].setValue(o.food);
  this.formValue.controls['tag'].setValue(o.tag);
  this.formValue.controls['phone'].setValue(o.phone);
  this.formValue.controls['addres'].setValue(o.addres);
}

updateProdDetails(){
  this.orderModelObj.food = this.formValue.value.food;
  this.orderModelObj.tag = this.formValue.value.tag;
  this.orderModelObj.phone = this.formValue.value.phone;
  this.orderModelObj.addres = this.formValue.value.addres;

  this.order.updateOrder(this.orderModelObj, this.orderModelObj.id).subscribe(res=>{
    alert("User record is updated! ❤")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllOrders()//get the instance data 
  })
}
}
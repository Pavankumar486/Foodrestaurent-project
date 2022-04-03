import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../share/api.service';
import { UserModel } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formValue !:FormGroup;
  userModelObj : UserModel = new UserModel(); 
  userData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  
  constructor(private formBuilder:FormBuilder, private api:ApiService){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[' '],
      email:[' '],
      mobile: [' '],
      address:[' '],

    })
  this.getAllUsers()
  }

  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postUserDetails(){ // done post api
    this.userModelObj.name = this.formValue.value.name;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.address = this.formValue.value.address;

    this.api.postUser(this.userModelObj).subscribe(res=>{
      console.log(res);
      alert("User registered successfully ✍")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUsers() // for instance update data
    },
      err =>{
      alert ("something went wrong,  please check ✘")
    })


}

  // get all user details
  getAllUsers() { 
    this.api.getUsers().subscribe(res=>{
      this.userData = res;
    })
  }

   //delete all user details
deleteUsers(use:any){
  this.api.deleteUser(use.id).subscribe(res=>{
    alert("User record deleted 👍 ")
    this.getAllUsers()// get the instaance data
  })
}

onEdit(use:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.userModelObj.id= use.id;
  this.formValue.controls['name'].setValue(use.name);
  this.formValue.controls['email'].setValue(use.email);
  this.formValue.controls['mobile'].setValue(use.mobile);
  this.formValue.controls['address'].setValue(use.address);
}

updateUserDetails(){
  this.userModelObj.name = this.formValue.value.name;
  this.userModelObj.email = this.formValue.value.email;
  this.userModelObj.mobile = this.formValue.value.mobile;
  this.userModelObj.address = this.formValue.value.address;

  this.api.updateUser(this.userModelObj, this.userModelObj.id).subscribe(res=>{
    alert("User record is updated! ❤")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllUsers()//get the instance data 
  })
}
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'payments';

  constructor( private router:Router) { }

  getName(){
    // alert("account not found")
    alert("Order is placed, Please provide the feedback")
     this.router.navigate(['feedback'])

  }
}


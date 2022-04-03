import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { SignComponent } from './admin/sign/sign.component';
import { LogComponent } from './admin/log/log.component';
import { HeadComponent } from './admin/head/head.component';
import { ProdComponent } from './admin/prod/prod.component';
import { FootComponent } from './admin/foot/foot.component';
import { CartComponent } from './admin/cart/cart.component';
import { FoodcardsComponent } from './admin/foodcards/foodcards.component';
import { OrderComponent } from './order/order.component';
import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
  {path:' ', redirectTo:'login', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'nav', component:HomeComponent},
  {path:'', component:NavComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'header',component:HeaderComponent},
  {path:'payment',component:PaymentComponent},
  {path:'contact',component:ContactComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'sign', component:SignComponent},
  {path:'log', component:LogComponent},
  {path:'head', component:HeadComponent},
  {path:'prod', component:ProdComponent},
  {path:'foot', component:FootComponent},
  {path:'cart', component:CartComponent},
  {path:'foodcards',component:FoodcardsComponent},
  {path:'order', component:OrderComponent},
  { path: 'logout', component: LogoutComponent}

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

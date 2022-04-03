import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {   HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { LogComponent } from './admin/log/log.component';
import { SignComponent } from './admin/sign/sign.component';
import { HeadComponent } from './admin/head/head.component';
import { ProdComponent } from './admin/prod/prod.component';
import { CartComponent } from './admin/cart/cart.component';
import { FootComponent } from './admin/foot/foot.component';
import { OrderComponent } from './order/order.component';
import { LogoutComponent } from './logout/logout.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    ContactComponent,
    NotFoundComponent,
    NavComponent,
    LoginComponent,
    PaymentComponent,
    FeedbackComponent,
    RegisterComponent,
    SignupComponent,
    LogComponent,
    SignComponent,
    HeadComponent,
    ProdComponent,
    CartComponent,
    FootComponent,
    OrderComponent,
    LogoutComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

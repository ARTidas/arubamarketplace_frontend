import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductsService} from './products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalContentComponent } from './login-modal-content/login-modal-content.component';
import { ReactiveFormsModule } from '@angular/forms';










@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    LoginModalContentComponent,

   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService,NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000; // Automatikus váltás időzítése (opcionális)
    config.wrap = true;     // Automatikus újrakezdés a végéről (opcionális)
    config.keyboard = true; // Navigáció a nyilak segítségével (opcionális)
  }
 }

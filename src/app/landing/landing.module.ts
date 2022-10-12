import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ],
})
export class LandingModule { }

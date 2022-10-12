import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

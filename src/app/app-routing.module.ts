import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
// import { ItemsComponent } from './components/items/items.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { SuplierComponent } from './components/suplier/suplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component';


const routes: Routes = [
  {path:'',component:HomeComponent},  
  {path:'home',component:HomeComponent, 
  children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'sales',component:SalesComponent},
  {path:'purchased-items',component:PurchasedComponent},
  {path:'suppliers',component:SuplierComponent},

  {path:'stocks-list',component:StocksComponent},
  // {path:'items',component:ItemsComponent},
  {path:'add-supplier',component:AddSupplierComponent},
  {path:'update-supplier',component:UpdateSupplierComponent}
  ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
// import { ItemsComponent } from './components/items/items.component';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuplierComponent } from './components/suplier/suplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './update-supplier/update-supplier.component'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewcompComponent } from './newcomp/newcomp.component';
// import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PurchasedComponent,
    // ItemsComponent,
    SalesComponent,
    StocksComponent,
    SidebarComponent,
    SuplierComponent,
   
    AddSupplierComponent,
    UpdateSupplierComponent,
    NewcompComponent,
    // AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

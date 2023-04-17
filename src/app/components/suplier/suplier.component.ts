import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/supplier';
import { SupplierService } from 'src/app/supplier.service';

@Component({
  selector: 'app-suplier',
  templateUrl: './suplier.component.html',
  styleUrls: ['./suplier.component.css']
})
export class SuplierComponent implements OnInit{
  suppliers!:Supplier[];
  constructor(private supplierService:SupplierService,private router:Router){
    

  }
  ngOnInit(): void {
    this.getSuppliers();
    
  }
  private getSuppliers(){
    console.log("nehkj");
    
    this.supplierService.getSuppliersList().subscribe(data => {this.suppliers=data;})

  }
  addSupplier(){
    this.router.navigate(['home/add-supplier']);
  }
  updateSupplier(){
    this.router.navigate(['home/update-supplier']);
  }

}


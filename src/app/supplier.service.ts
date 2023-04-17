import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  private baseurl="http://localhost:8080/api/v1/suppliers";

  constructor(private httpClient:HttpClient) {

   

   }
   getSuppliersList():Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(this.baseurl);
  }
}

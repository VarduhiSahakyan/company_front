import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('/employee')
  }

  saveEmployee(employee: any){
    return this.http.post('/employee', employee,{responseType: 'text'});
  }

  getEmployeeById(id:number){
    return this.http.get('/employee/' + id, {responseType: 'text'});
  }

  deleteEmployee(id: number){
    return this.http.delete('/employee/' + id, {responseType: 'text'});
  }


}

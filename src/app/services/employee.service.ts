import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/employees'

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data)
  }
  getEmployeeList(): Observable<any> {
    return this._http.get(this.baseUrl)
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/` + `${id}`)
  }
  update(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/` + `${id}`, data)
  }
 }

// task.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://127.0.0.1:8000/tasks/';
  
  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTask(taskData: any): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }

  updateTask(id: number, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}`, taskData);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}

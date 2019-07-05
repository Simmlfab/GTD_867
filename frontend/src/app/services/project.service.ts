import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Project } from '../model/project';
import { catchError, map, tap } from 'rxjs/operators';
import { ToDo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private router:Router) { }
  private apiUrl: string = 'http://localhost:8080';

  public getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl + '/api/project', { withCredentials: true });
  }
  public getProject(id: number): Observable<Project> {
    const url = '/api/project/';
    return this.http.get<Project>(this.apiUrl+url+id, { withCredentials: true });
  }
  
  public addNewToDo(id:number,newToDo: ToDo) {
    return this.http.post(this.apiUrl + '/api/project/'+id, newToDo, { withCredentials: true }); 
}


  public addNewProject(newProject: Project) {
      return this.http.post(this.apiUrl + '/api/project', newProject, { withCredentials: true }); 
  }
  public updateProject(project: Project) {
    console.log("###");
    console.log(project);
    return this.http.put(this.apiUrl + '/api/project', project, { withCredentials: true });
  }
}

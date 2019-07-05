import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ToDo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {
  public projectID: Project = new Project;
  public newToDo: ToDo = new ToDo();
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private projectService:ProjectService, private toDoService: TodoService) { }
  
  id: number ; 

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.reloadProject();
  }
  ionViewDidEnter(){
    this.reloadProject();
  }

  async addToDo() {
    if (this.newToDo.title != null && this.newToDo.title != "") { 
      this.toDoService.addNewToDo(this.newToDo).subscribe(
        data => {
          this.reloadProject();
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
      debugger
      //NewAddToDo wird nicht richtig in die ArrayList von Projekt gespeichert
      this.projectService.addNewToDo(this.projectID.id, this.newToDo);
    }
  }

  //for schleife, alltodos von diesem Projekt
  //query how to get only todos from this project (Previn)

  //Back button zurück zu Projects!

  public reloadProject() {
    this.projectService.getProject(this.id).subscribe(
      data => {
        this.projectID = data;
        console.log(this.projectID)
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }
  

}

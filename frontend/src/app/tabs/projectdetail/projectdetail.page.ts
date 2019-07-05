import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {
  public projectID: Project = new Project;
  public newToDo: ToDo = new ToDo();
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private projectService:ProjectService ) { }
  
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
      this.projectService.addNewToDo(this.id, this.newToDo).subscribe(
        data => {
          this.reloadProject();
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
    }
  }
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

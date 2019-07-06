import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/model/project';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-createnewproject',
  templateUrl: './createnewproject.page.html',
  styleUrls: ['./createnewproject.page.scss'],
})
export class CreatenewprojectPage implements OnInit {
  constructor(private router: Router, private projectService: ProjectService) { }

  public newProject: Project = new Project();

  ngOnInit() {

  }

  async addProject() {
    if (this.newProject.title != null && this.newProject.title != "" && this.newProject.priority !=null ) { 
      this.projectService.addNewProject(this.newProject).subscribe(
        data => {
          console.log("Successfully added new project.");
          this.newProject = new Project();
          this.router.navigateByUrl('/tabs/projects');
        }, err => {
          console.log(err);
          this.router.navigateByUrl('/login');
        }
      );
    }
  }

  async backProject(){
    this.router.navigateByUrl('/tabs/projects');
  }
}

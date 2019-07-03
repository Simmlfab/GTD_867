import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  constructor(private router:Router, private projectService:ProjectService ) { }
  public allProjects: Project[] = [];

  ngOnInit() {
    this.reloadAllProjects();
  }
  public updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(
      data => {
        console.log("Successfully updated project.");
        this.reloadAllProjects();
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }
  ionViewDidEnter() {
    this.reloadAllProjects()
  }
  public reloadAllProjects() {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.allProjects = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

}

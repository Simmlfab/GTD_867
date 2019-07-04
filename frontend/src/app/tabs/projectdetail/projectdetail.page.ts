import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {
  
  constructor(private router:Router, private projectService:ProjectService ) { }
  public projectid: Project;

  ngOnInit() {
    this.reloadProject();
  }
  public updateProject(project: Project) {
    this.projectService.updateProject(project).subscribe(
      data => {
        console.log("Successfully updated project.");
        this.reloadProject();
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }
  ionViewDidEnter() {
    this.reloadProject()
  }
  public reloadProject() {
    this.projectService.getProject().subscribe(
      data => {
        this.projectid = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

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

  constructor(private router: Router, private projectService: ProjectService) { }

  public allProject: Project[] = [];
  public newProject: Project = new Project();

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.page.html',
  styleUrls: ['./projectdetail.page.scss'],
})
export class ProjectdetailPage implements OnInit {
  public projectID: Project = new Project;
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

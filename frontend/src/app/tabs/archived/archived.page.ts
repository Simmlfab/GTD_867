import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from 'src/app/model/todo';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {

  constructor(private router: Router, private toDoService: TodoService) { }

  public allArchivedToDos: ToDo[] = [];
  ngOnInit() {
    this.reloadAllArchivedToDos();
  }

  ionViewDidEnter(){
    this.reloadAllArchivedToDos();
  }

  public reloadAllArchivedToDos() {
    this.toDoService.getAllArchivedToDos().subscribe(
      data => {
        this.allArchivedToDos = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

}

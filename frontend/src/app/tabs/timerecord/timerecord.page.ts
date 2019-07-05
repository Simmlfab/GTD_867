import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent} from 'ionic2-calendar/calendar';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from 'src/app/model/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timerecord',
  templateUrl: './timerecord.page.html',
  styleUrls: ['./timerecord.page.scss'],
})
export class TimerecordPage implements OnInit {

  public allToDos: ToDo[] = [];

  eventSource = [];

  event = {
    title: '',
    startTime: '',
    endTime: '',
  }

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor(private router: Router, private toDoService: TodoService) { }

  ngOnInit() {
    this.resetEvent();
    this.loadToDos();
    this.setToDosIntoCalendar();
  }

  setToDosIntoCalendar(){
    debugger
    for (let todo of this.allToDos){
      let eventCopy = {
        title: todo.title,
        startTime:  new Date(todo.date).toISOString(),
        endTime: new Date(todo.date).toISOString()
      }
   
      this.eventSource.push(eventCopy);
      this.myCal.loadEvents();
      this.resetEvent();
    }
  }

  loadToDos(){
    debugger
    this.toDoService.getAllToDos().subscribe(
      data => {
        this.allToDos = data;
      }, err => {
        console.log(err);
        this.router.navigateByUrl('/login');
      }
    );
  }

  resetEvent(){
    this.event ={
      title: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    }
  }

  changeMode(mode){
    this.calendar.mode = mode;
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  today(){
    this.calendar.currentDate = new Date();
  }
 
  // Calendar event was clicked
  async onEventSelected(event) {
    
  }
}

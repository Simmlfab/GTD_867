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
  taskForm: FormGroup;
  taskList: Project[];
  task: Project;
  title: String = "Neues Projekt erfassen";
  hiddenDeleteButton = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    console.log(this);
    if (navParams.data.taskList !== undefined) {
      this.taskList = navParams.data.taskList;
    }
    if (navParams.data.editorMode == "edit") {
      this.task = navParams.data.task;
      this.title = navParams.data.task.title;
    } else {
      this.task = {
        id : null,
        title: "",
        owner: "",
        description: "",
        priority: 0,
      } as Project;
      this.hiddenDeleteButton = 1;
    }
  }


  ionViewDidLoad() {
    this.taskForm = this.formBuilder.group({

    });
  }

  onSubmit() {
    /* if (this.navParams.data.editorMode == "edit") {
      this.taskProvider.updateTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Task angepasst", 'Der Task wurde erfolgreich angepasst.');
          //Auf die rootpage zurückkehren
          this.navCtrl.popToRoot();
        } else {
          this.showAlert("Anpassung fehlgeschlagen", 'Der Task wurde nicht erfolgreich angepasst.');
        }
      },
        error => {
          console.log(error);
          this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
        });
    } else {
      this.taskProvider.addTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Task hinzugefügt", 'Der Task wurde erfolgreich gespeichert.');
          //Fügt den neuen Task dem arraylist aus dem parent hinzu
          if (this.taskList !== undefined) {
            this.taskList.push(response.data as Proj);
          }
          //Auf die rootpage zurückkehren
          this.navCtrl.popToRoot();
        } else {
          this.showAlert("Speichern fehlgeschlagen", 'Der Task wurde nicht erfolgreich gespeichert.');
        }
      },
        error => {
          console.log(error);
          this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
        });
    } */
  }

<<<<<<< HEAD
  public deleteTask() {
    /* this.taskProvider.deleteTask(this.task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen erfolgreich", 'Der Task wurde erfolgreich gelöscht.');
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        if (this.taskList !== undefined) {
          const idx = this.taskList.indexOf(this.task);
          this.taskList.splice(idx, 1);
=======
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
>>>>>>> 82421e1d74ad25e5d1f5ae8214d1f27111528c43
        }
        //Auf die rootpage zurückkehren
        this.navCtrl.popToRoot();
      } else {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde nicht erfolgreich gelöscht.');
      }
    },
      error => {
        console.log(error);
        this.showAlert("Fehler", 'Beim löschen ist ein Fehler aufgetreten. ' + error);
      }); */
  }


  showAlert(title, msg) {
   /*  this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    }).present(); */
  }



  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return { invalidName: true };
    }
  }

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
        return { invalidPhone: true };
      }
    }
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
      return { invalidEmail: true };
    }
  }
  ngOnInit() {
  }

  async backProject(){
    this.router.navigateByUrl('/tabs/projects');
  }
}

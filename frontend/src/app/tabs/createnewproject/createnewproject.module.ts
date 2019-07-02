import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatenewprojectPage } from './createnewproject.page';

const routes: Routes = [
  {
    path: '',
    component: CreatenewprojectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreatenewprojectPage]
})
export class CreatenewprojectPageModule {
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {WorkcompComponent} from '../components/workcomp/workcomp.component';
import { IonicModule } from '@ionic/angular';

import { WorkoutPage } from './workout.page';
import {WorkdaysComponent} from '../components/workdays/workdays.component';
import {WorkdetailComponent} from '../components/workdetail/workdetail.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild(routes)
  ],
  declarations: [WorkoutPage, WorkcompComponent , WorkdaysComponent , WorkdetailComponent],
  entryComponents: [WorkdetailComponent]
})
export class WorkoutPageModule {}

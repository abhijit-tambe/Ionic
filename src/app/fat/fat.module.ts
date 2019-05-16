import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {BodycompComponent} from '../components/bodycomp/bodycomp.component';
import { IonicModule } from '@ionic/angular';

import { FatPage } from './fat.page';

const routes: Routes = [
  {
    path: '',
    component: FatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FatPage,BodycompComponent]
})
export class FatPageModule {}

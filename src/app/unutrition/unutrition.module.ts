import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UNutritionPageRoutingModule } from './unutrition-routing.module';

import { UNutritionPage } from './unutrition.page';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UNutritionPageRoutingModule,
    DragDropModule
  ],
  declarations: [UNutritionPage]
  
})
export class UNutritionPageModule {}

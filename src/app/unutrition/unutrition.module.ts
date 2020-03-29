import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UNutritionPageRoutingModule } from './unutrition-routing.module';

import { UNutritionPage } from './unutrition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UNutritionPageRoutingModule
  ],
  declarations: [UNutritionPage]
})
export class UNutritionPageModule {}

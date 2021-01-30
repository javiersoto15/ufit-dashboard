import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ClientListComponent } from '../components/client-list/client-list.component';
import { Router } from '@angular/router'

interface FoodData {
  name: string;
  scale: string;
  servingSize: number; 
  protien: number;
  carbohydrates: number;
  fats: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {
    public folder: string;
    constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController, private router: Router) { }
  
    ngOnInit() {
      
      this.folder = this.activatedRoute.snapshot.paramMap.get('id');
      
    }
  
    items = [
      'Turkey',
      'Steak', 
      'Pork', 
      'Beef'
    ];

    public foodItems: FoodData[] = [
      {
        name: 'apple',
        scale: 'whole',
        servingSize: 60, 
        protien: 100, 
        carbohydrates: 100,
        fats: 100,
     },
    ];

    
    
    
    delete(i){
      console.log('my Delete Works');
      this.foodItems.splice(i,1);
      
      
    }
  
    async openFood(i){

      console.log(i)
      const alert = await this.alertController.create({
        header: 'Food Info',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: this.foodItems[i].name,
          },
          {
            name: 'Serving Size',
            type: 'number',
            placeholder:  this.foodItems[i].servingSize.toString() + ' ' + this.foodItems[i].scale

          },
          {
            name: 'Protein',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: this.foodItems[i].protien.toString() + ' grams'
          },
          {
            name: 'Carbohydrates',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: this.foodItems[i].carbohydrates.toString() + ' grams'
          },
          {
            name: 'Fats',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: this.foodItems[i].fats.toString() + ' grams'
          },
          
        ],   
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel',
            cssClass: 'secondary',
            handler: (blah)=> {console.log('confirm cancel: blah')}
          },
          {
            text: 'Okay',
            handler: ()=> {console.log('confirm okay')}
          }
        ]
      });
  
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result); 
      
    }
  
  
  
  
    async newFood(){
      const alert = await this.alertController.create({
        header: 'Food Info',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Food Name',
          },
          {
            name: 'scale',
            type: 'text',
            placeholder: 'serving scale',
          },
          {
            name: 'servingSize',
            type: 'text',
            placeholder: 'Serving Size',
            
          },
          {
            name: 'protien',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Protien in Grams'
          },
          {
            name: 'carbohydrates',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Carbohydrates in Grams'
          },
          {
            name: 'fats',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Fats in Grams'
          },
          
        ],   
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel',
            cssClass: 'secondary',
            handler: (blah)=> {console.log('confirm cancel: blah')}
          },
          {
            text: 'Okay',
            handler: ()=> {console.log('confirm okay')}
          }
        ]
      });
  
      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result); 
      var newFood: FoodData = {
        name:           result.data.values.name,
        scale:          result.data.values.scale,
        servingSize:    result.data.values.servingSize,
        protien:        result.data.values.protien,
        carbohydrates:  result.data.values.carbohydrates,
        fats:           result.data.values.fats,
      }
     
  
      this.foodItems.push(newFood);
      
    }
    
    
    
  
  }



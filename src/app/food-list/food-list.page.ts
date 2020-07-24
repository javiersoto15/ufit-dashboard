import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ClientListComponent } from '../components/client-list/client-list.component';
import { Router } from '@angular/router'

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

    
    
    
    delete(i){
      console.log('my Delete Works');
      this.items.splice(i,1);
      
      
    }
  
    async openFood(i){

      console.log(i)
      const alert = await this.alertController.create({
        header: 'Food Info',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'First Name',
          },
          {
            name: 'Serving Size',
            type: 'text',
            placeholder: 'Serving Size',
            
          },
          {
            name: 'Protein',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Protein in Grams'
          },
          {
            name: 'Carbohydrates',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Carbohydrates in Grams'
          },
          {
            name: 'Fats',
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
      
    }
  
  
  
  
    async newFood(){
      const alert = await this.alertController.create({
        header: 'Food Info',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'First Name',
          },
          {
            name: 'Serving Size',
            type: 'text',
            placeholder: 'Serving Size',
            
          },
          {
            name: 'Protien',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Protien in Grams'
          },
          {
            name: 'Carbohydrates',
            type: 'number',
            min: '0',
            max: '500',
            placeholder: 'Carbohydrates in Grams'
          },
          {
            name: 'Fats',

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
      let foodName = result.data.values.name;
      this.items.push(foodName);
      
    }
    
    
    
  
  }



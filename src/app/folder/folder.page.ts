import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ClientListComponent } from '../components/client-list/client-list.component';
import { Router } from '@angular/router'

interface ClientData {
  firstName: string;
  lastName: string;
  birthdate: Date; 
  height: number;
  weight: number;
  gender: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],

})

export class FolderPage implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }


  public items = [
    'Zach Stenger',
    'Javier Soto', 
    'Mathew Moran', 
    'Brett Nedz'
  ];

  public clients: ClientData[] = [
    {
      firstName: 'apple', 
      lastName: 'fruit',
      birthdate: new Date(),
      height: 60, 
      weight: 100, 
      gender: 'Male'  
   }, 
   {
    firstName: 'test', 
    lastName: 'name',
    birthdate: new Date(),
    height: 60, 
    weight: 100, 
    gender: 'Male'  
 },
 {
  firstName: 'second', 
  lastName: 'test',
  birthdate: new Date(),
  height: 60, 
  weight: 100, 
  gender: 'Male'  
},
    
];
  
  
  delete(i){
    console.log('my Delete Works');
    this.items.splice(i,1);
    
    
  }

  async openClients(i){
    console.log(i)
    const alert = await this.alertController.create({
      header: 'Client Info',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: this.clients[i].firstName,
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: this.clients[i].lastName
        },
        {
          name: 'birthdate',
          type: 'date',
          placeholder: this.clients[i].birthdate.toString()
          
        },
        {
          name: 'weight',
          type: 'number',
          min: '0',
          max: '500',
          placeholder: this.clients[i].weight.toString()
        },
        {
          name: 'Height',
          type: 'number',
          placeholder: this.clients[i].height.toString()
        },
        {
          name: 'gender',
          type: 'text',
          placeholder: this.clients[i].gender

        }
        
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




  async newClients(){
    const alert = await this.alertController.create({
      header: 'New Client',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'First Name'
        },
        {
          name: 'name2',
          type: 'text',
          placeholder: 'Last Name'
        },
        {
          name: 'birthdate',
          type: 'date',
          
        },
        {
          name: 'weight',
          type: 'number',
          min: '0',
          max: '500',
          placeholder: 'Weight'
        },
        {
          name: 'Height',
          type: 'number',
          placeholder: 'Height in inches'
        },
        {
          name: 'gender',
          type: 'text',
          placeholder: 'Male or Female'

        }
        
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
    var newClient: ClientData = {
      firstName:   result.data.values.name1,
      lastName:    result.data.values.name2,
      birthdate:   result.data.values.birthdate,
      weight:      result.data.values.weight,
      height:      result.data.values.height,
      gender:      result.data.values.gender,
    }
   

    this.clients.push(newClient) 
    
  }
  
  goToClientNutrition(i){
    console.log("click works")
    this.router.navigate(['/unutrition/unutrition'])
    
  }
  

}

// async presentAlert(){
//   const alert = await this.alertController.create({
//     header: 'Alert',
//     subHeader: 'Subtitle',
//     message: 'This is an alert Message',
//     buttons: ['OK']
//   });

//   await alert.present();
//   let result = await alert.onDidDismiss();
//   console.log(result);
// }

// async presentAlertMultipleButtons(){
//   const alert = await this.alertController.create({
//     header: 'Alert',
//     subHeader: 'Subtitle',
//     message: 'This is an alert Message',
//     buttons: ['Cancel', 'Open Modal', 'OK']
//   });

//   await alert.present();
//   let result = await alert.onDidDismiss();
//   console.log(result);
// }

// async presentAlertConfirm(){
//   const alert = await this.alertController.create({
//     header: 'Alert',
//     message: 'This is an <strong>alert Message</strong>',
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'Cancel',
//         cssClass: 'secondary',
//         handler: (blah)=> {console.log('confirm cancel: blah')}
//       },
//       {
//         text: 'Okay',
//         handler: ()=> {console.log('confirm okay')}
//       }
//     ]
//   });

//   await alert.present();
//   let result = await alert.onDidDismiss();
//   console.log(result);
// }
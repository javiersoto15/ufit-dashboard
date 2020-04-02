import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],

})
export class FolderPage implements OnInit {
  public folder: string;
  constructor(private activatedRoute: ActivatedRoute, public alertController: AlertController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  items = [
    'Zach Stenger', 
    'Javier Soto', 
    'Mathew Moran', 
    'Brett Nedz'
  ]
  
  delete(i){
    console.log('my Delete Works');
    this.items.splice(i,1);
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
    let Clientname = result.data.values.name1 + result.data.values.name2;
    this.items.push(Clientname);
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
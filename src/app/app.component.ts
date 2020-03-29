import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Clients',
      url: '/folder/Clients',
      icon: 'person', 
      
    },
    {
      title: 'UNutrition',
      url: '/unutrition/unutrition',
      icon: 'nutrition'
    },
    {
      title: 'NewClient',
      url: '/new-client/newClient',
      icon: 'person'
    }
    // {
    //   title: 'Favorites',
    //   url: '/folder/Favorites',
    //   icon: 'heart'
    // },
    // {
    //   title: 'Archived',
    //   url: '/folder/Archived',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Trash',
    //   url: '/folder/Trash',
    //   icon: 'trash'
    // },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }, 
    // // testing out new pages
    // {
    //   title: 'Hello World',
    //   url: '/folder/Clients',
    //   icon: 'person'
    // }
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  
  newClientClick(){
    
  }

  async presentAlert() {
    const path = window.location.pathname.split('folder/')[1];
    const alert = await this.alertController.create({
      header: 'New Client',
     // subHeader: 'Subtitle',
      message: 'Would you like to add a new client?',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: ()=> {console.log('clicked cancel')}
        },
        {
          text: 'Yes',
          handler: ()=> {}
          
        }
      ]
    });

    await alert.present();
  }

 
}

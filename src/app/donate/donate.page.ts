import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-donate',
  templateUrl: 'donate.page.html',
  styleUrls: ['donate.page.scss'],
})
export class DonatePage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateRoot('/tabs');
    }
    
}

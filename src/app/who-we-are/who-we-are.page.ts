import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-who-we-are',
  templateUrl: 'who-we-are.page.html',
  styleUrls: ['who-we-are.page.scss'],
})
export class WhoWeArePage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateRoot('/tabs');
    }

}

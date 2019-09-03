import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-sponsors',
  templateUrl: 'sponsors.page.html',
  styleUrls: ['sponsors.page.scss'],
})
export class SponsorsPage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateRoot('/tabs');
    }

}

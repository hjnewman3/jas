import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-fundraisers',
  templateUrl: 'fundraisers.page.html',
  styleUrls: ['fundraisers.page.scss'],
})
export class FundraisersPage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateRoot('/tabs');
    }

}

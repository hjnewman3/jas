import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateRoot('/tabs');
    }

}
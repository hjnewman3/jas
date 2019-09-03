import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-my-jas',
  templateUrl: 'my-jas.page.html',
  styleUrls: ['my-jas.page.scss']
})
export class MyJasPage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    goToMyJasPage() {
        this.navCtrl.navigateForward('my-jas');
    }

    goToEventsPage() {
        this.navCtrl.navigateForward('events');
    }

    goToHomePage() {
        this.navCtrl.navigateForward('home');
    }

    goToNajaPage() {
        this.navCtrl.navigateForward('naja');
    }

    goToInfoPage() {
        this.navCtrl.navigateForward('info');
    }

}
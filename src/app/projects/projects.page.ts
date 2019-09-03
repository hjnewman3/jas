import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-projects',
  templateUrl: 'projects.page.html',
  styleUrls: ['projects.page.scss'],
})
export class ProjectsPage {

    homePage = HomePage;

    constructor(public navCtrl: NavController) { }

    backToHomePage() {
        this.navCtrl.navigateForward('/tabs');
    }

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

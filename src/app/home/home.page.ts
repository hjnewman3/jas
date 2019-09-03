import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ProjectsPage } from '../projects/projects.page';
import { EventsPage } from '../events/events.page';
import { FundraisersPage } from '../fundraisers/fundraisers.page';
import { DonatePage } from '../donate/donate.page';
import { SponsorsPage } from '../sponsors/sponsors.page';
import { WhoWeArePage } from '../who-we-are/who-we-are.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

    projectsPage = ProjectsPage;
    eventsPage = EventsPage;
    fundraisersPage = FundraisersPage;
    donatePage = DonatePage;
    sponsorsPage = SponsorsPage;
    whoWeArePage = WhoWeArePage;

  constructor(public navCtrl: NavController) { }

    goToProjectsPage() {
        this.navCtrl.navigateForward('/projects');
    }

    goToEventsPage() {
        this.navCtrl.navigateForward('events');
    }

    goToFundraisersPage() {
        this.navCtrl.navigateForward('/fundraisers');
    }

    goToDonatePage() {
        this.navCtrl.navigateForward('/donate');
    }

    goToSponsorsPage() {
        this.navCtrl.navigateForward('/sponsors');
    }

    goToWhoWeArePage() {
        this.navCtrl.navigateForward('/who-we-are');
    }

}

import {Component, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../utils/translate";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  public currentYear: number;
  public translate = Translate;
  public isMinimize: boolean = false;
  public isDelayFinish: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.currentYear = new Date().getFullYear();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMinimize = this.router.url.includes('/contact');
      }
    });

    setTimeout(() => {
      this.isDelayFinish = true;
    }, 3000);
  }
}

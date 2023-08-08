import {Component, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../utils/translate";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  public translate = Translate;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const element = document.getElementById('navbar-component')
        if (url === '/contact') {
          console.log('contact')
          element!.classList.add('contact');
        } else {
          if (element!.classList.contains('contact')) {
            element!.classList.remove('contact');
          }
        }
      }
    });
  }
}

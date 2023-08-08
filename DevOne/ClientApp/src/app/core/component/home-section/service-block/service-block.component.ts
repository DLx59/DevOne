import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-block',
  templateUrl: './service-block.component.html',
  styleUrls: ['./service-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceBlockComponent {
  @Input() imgSrc: string = 'assets/images/arrow_dark.svg';
  @Input() imgHeight: string = '204';
  @Input() imgWidth: string = '204';
  @Input() imgAlt: string = 'Devone Création de Site Internet';
  @Input() title: string = 'title';
  @Input() content: string = 'content';
  @Input() redirectUrl: string = '';
  @Input() priority: boolean = false;

  constructor(public router: Router) {
  }

  public goto(routerLink: string) {
    this.router.navigate([routerLink]);
  }
}

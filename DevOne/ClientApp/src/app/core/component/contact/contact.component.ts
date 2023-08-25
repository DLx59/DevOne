import {Component, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../utils/translate";
import {LightRouteService} from "../../services/light-route/light-route.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  protected readonly translate = Translate;

  constructor(private lightRouteService: LightRouteService) {
    this.lightRouteService.init();
  }
}

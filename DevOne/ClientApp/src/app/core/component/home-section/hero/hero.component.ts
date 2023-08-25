import {Component, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../../utils/translate";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {
  protected readonly translate = Translate;
}

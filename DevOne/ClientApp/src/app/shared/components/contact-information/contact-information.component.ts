import {Component, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../../core/utils/translate";

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactInformationComponent {

  public translate = Translate;
}

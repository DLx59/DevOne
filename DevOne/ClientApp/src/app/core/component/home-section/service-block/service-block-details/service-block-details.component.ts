import {Component, Input} from '@angular/core';
import {Translate} from "../../../../utils/translate";

@Component({
  selector: 'app-service-block-details',
  templateUrl: './service-block-details.component.html',
  styleUrls: ['./service-block-details.component.scss']
})
export class ServiceBlockDetailsComponent {
  @Input() imgSrc: string = 'assets/images/arrow_dark.svg';
  @Input() imgHeight: string = '204';
  @Input() imgWidth: string = '204';
  @Input() imgAlt: string = 'Devone Création de Site Internet';
  @Input() title: string = 'title';
  @Input() content: string = 'content';
  @Input() redirectUrl: string = '';
  @Input() priority: boolean = false;

  public translate = Translate
}

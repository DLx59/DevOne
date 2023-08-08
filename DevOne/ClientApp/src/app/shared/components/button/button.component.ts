import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() buttonName: string = 'Button';
  @Input() routerLink: string = '';
  @Input() buttonClasses: string = '';
  @Input() isWhiteArrow: boolean = false;
  public isHovered: boolean = false;
}

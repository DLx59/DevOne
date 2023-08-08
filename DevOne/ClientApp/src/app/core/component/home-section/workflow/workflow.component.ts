import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkflowComponent {
  @Input() imgSource: string = 'assets/images/preliminary-study.svg'
  @Input() imgAlt: string = 'DevOne Mouscron'
  @Input() imgHeight: string = '200'
  @Input() imgWidth: string = '200'
  @Input() title: string = 'Titre'
  @Input() content: string = 'Content'
}

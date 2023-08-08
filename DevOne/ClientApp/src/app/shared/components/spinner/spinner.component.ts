import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnDestroy {
  @Input() loadingText: string = ''
  @Output() isDestroy: EventEmitter<boolean> = new EventEmitter<boolean>()

  public ngOnDestroy() {
    this.isDestroy.next(true);
  }
}

import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // @ViewChild('content', {static: true}) content!: any;

  public getValue(event: boolean) {
    //   if (event) {
    //     console.log(this.content.nativeElement);
    //     this.content.nativeElement.classList.remove('app-content');
    //     this.content.nativeElement.classList.add(['navbar-open'], ['app-content']);
    //   } else {
    //     this.content.nativeElement.classList.remove('navbar-open');
    //   }
  }
}

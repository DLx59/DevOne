import {AfterViewInit, Component, EventEmitter, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../utils/translate";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbarCollapse', {static: true}) navbarCollapse!: any;
  @Output() isShowClassPresentEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  public translate = Translate
  public isContactRoute: boolean = false;
  private isShowClassPresent: boolean = false

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        this.isContactRoute = url === '/contact';
      }
    });
  }

  ngAfterViewInit() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const classList = this.navbarCollapse.nativeElement.classList;
          this.isShowClassPresent = classList.contains('show') || classList.contains('collapsing');
          this.isShowClassPresentEvent.emit(this.isShowClassPresent);
        }
      });
    });

    observer.observe(this.navbarCollapse.nativeElement, {attributes: true});
  }
}

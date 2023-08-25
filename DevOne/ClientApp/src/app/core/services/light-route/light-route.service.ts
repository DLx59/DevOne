import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {RouteConstant} from "../../constants/routeConstant";

@Injectable({
  providedIn: 'root'
})
export class LightRouteService {
  constructor(private router: Router) {
  }

  public init() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const element = document.getElementById('navbar-component')
        if (RouteConstant.getRoutes().includes(this.router.url)) {
          element!.classList.add('light-theme');
        } else {
          if (element!.classList.contains('light-theme')) {
            element!.classList.remove('light-theme');
            console.log('remove');
          }
        }
      }
    });
  }
}

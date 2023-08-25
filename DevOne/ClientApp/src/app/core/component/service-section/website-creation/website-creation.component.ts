import {Component} from '@angular/core';
import {Translate} from "../../../utils/translate";
import {LightRouteService} from "../../../services/light-route/light-route.service";
import {TranslateService} from "@ngx-translate/core";
import * as benefit from "../../../../../assets/json/benefits.json";

@Component({
  selector: 'app-website-creation',
  templateUrl: './website-creation.component.html',
  styleUrls: ['./website-creation.component.scss']
})
export class WebsiteCreationComponent {
  public translateDynamic = Translate as any
  public currentLang: string = 'fr';
  protected readonly benefit = benefit;
  protected readonly translate = Translate;

  constructor(private lightRouteService: LightRouteService, private translateService: TranslateService) {
    this.lightRouteService.init();
    this.translateService.onDefaultLangChange.subscribe(defaultLang => {
      this.currentLang = defaultLang.lang
    })
  }
}

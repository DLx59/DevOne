import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Translate} from "../../utils/translate";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-translate-menu',
  templateUrl: './translate-menu.component.html',
  styleUrls: ['./translate-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TranslateMenuComponent {
  @Input() calledFrom: string = '';
  translate = Translate
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = translateService.getDefaultLang()
    this.translateService.onDefaultLangChange.subscribe({
      next: (e: LangChangeEvent) => {
        this.currentLang = e.lang;
      },
      error: (error: any) => {
        console.error(`Erreur lors du changement de langue : ${error}`);
      }
    });
  }

  public changeCurrentLang(selectedLang: string) {
    this.translateService.setDefaultLang(selectedLang);
  }

  public addId(id: string) {
    const cdkOverlayContainerElement = document.getElementsByClassName('cdk-overlay-container');
    if (cdkOverlayContainerElement) {
      cdkOverlayContainerElement[0].id = id;
    }
  }
}

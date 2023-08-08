import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {ButtonComponent} from './components/button/button.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ContactFormComponent} from "./components/contact-form/contact-form.component";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import {MatIconModule} from "@angular/material/icon";
import { SocialNetworkComponent } from './components/social-network/social-network.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent,
    ContactFormComponent,
    ContactInformationComponent,
    SocialNetworkComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule,
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    MatIconModule,
  ],
  exports: [
    SpinnerComponent,
    ButtonComponent,
    ContactFormComponent,
    TranslateModule,
    ContactInformationComponent,
    SocialNetworkComponent
  ]
})
export class SharedModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from "./core/component/home-section/home.component";
import {NavbarComponent} from "./core/component/navbar/navbar.component";
import {FooterComponent} from "./core/component/footer/footer.component";
import {ContactComponent} from "./core/component/contact/contact.component";
import {HeroComponent} from "./core/component/home-section/hero/hero.component";
import {ServiceBlockComponent} from "./core/component/home-section/service-block/service-block.component";
import {WebsiteCreationComponent} from "./core/component/service-section/website-creation/website-creation.component";
import {ReviewsComponent} from "./core/component/reviews/reviews.component";
import {AppRoutingModule} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {TranslateMenuComponent} from "./core/component/translate-menu/translate-menu.component";
import {WorkflowComponent} from "./core/component/home-section/workflow/workflow.component";
import {NgxPaginationModule} from "ngx-pagination";
import {PaginationComponent} from "./core/component/reviews/pagination/pagination/pagination.component";
import {
  ServiceBlockDetailsComponent
} from "./core/component/home-section/service-block/service-block-details/service-block-details.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    HeroComponent,
    ServiceBlockComponent,
    WebsiteCreationComponent,
    ReviewsComponent,
    TranslateMenuComponent,
    WorkflowComponent,
    PaginationComponent,
    ServiceBlockDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterLink,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRippleModule,
    NgxPaginationModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

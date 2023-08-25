import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./core/component/home-section/home.component";
import {WebsiteCreationComponent} from "./core/component/service-section/website-creation/website-creation.component";
import {ContactComponent} from "./core/component/contact/contact.component";
import {RouteConstant} from "./core/constants/routeConstant";
import {Utils} from "./core/utils/utils";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: Utils.removeSlashRoute(RouteConstant.websiteCreation), component: WebsiteCreationComponent, pathMatch: 'full'},
  {path: Utils.removeSlashRoute(RouteConstant.contactRoute), component: ContactComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

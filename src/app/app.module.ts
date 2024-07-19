import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { CoreModule } from "./modules/core/core.module";
import { MenuComponent } from "./modules/shared/components";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes, {
    //   scrollPositionRestoration: "enabled",
    //   relativeLinkResolution: "legacy",
    // }),
    HttpClientModule,
    // AngularSvgIconModule,
    // ChartsModule,
    // NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    MenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import {TestComponent} from './pages/examples/test/test.component';
import { StandardpageComponent } from './pages/examples/standardpage/standardpage.component';
import { PremiumpageComponent } from './pages/examples/premiumpage/premiumpage.component';
import { BusinesspageComponent } from './pages/examples/businesspage/businesspage.component';
import { RegisteraccountComponent } from './pages/examples/registeraccount/registeraccount.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "test", component: TestComponent },
  { path: "standard", component: StandardpageComponent },
  { path: "premium", component: PremiumpageComponent },
  { path: "business", component: BusinesspageComponent },
  { path: "request", component: RegisteraccountComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}

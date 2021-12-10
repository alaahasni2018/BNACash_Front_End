import { Component, OnInit, OnDestroy } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})

export class ProfilepageComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  currentUserName : string = "";
  constructor() {}

  ngOnInit() {
    let token = localStorage.getItem("token");
    const decodedToken = helper.decodeToken(token);
    this.currentUserName = decodedToken.nom;
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }
}

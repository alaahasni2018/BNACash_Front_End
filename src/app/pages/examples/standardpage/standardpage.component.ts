import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { AuthService } from '../../../_services/auth.service';


@Component({
  selector: 'app-standardpage',
  templateUrl: './standardpage.component.html',
  styleUrls: ['./standardpage.component.scss']
})
export class StandardpageComponent implements OnInit {

  isCollapsed = true;
  constructor(private authService: AuthService , private router : Router,private route:ActivatedRoute) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  goToRequestPage(){
    this.router.navigate(['/request']);

  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}

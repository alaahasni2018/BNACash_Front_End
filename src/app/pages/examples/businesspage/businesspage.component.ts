import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-businesspage',
  templateUrl: './businesspage.component.html',
  styleUrls: ['./businesspage.component.scss']
})
export class BusinesspageComponent implements OnInit {

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

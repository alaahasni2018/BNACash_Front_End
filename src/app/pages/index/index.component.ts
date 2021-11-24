import { Component, OnInit, OnDestroy } from '@angular/core';
import noUiSlider from 'nouislider';
import {User} from '../../common/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';



@Component({
  selector: 'app-index',
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(private authService: AuthService , private router : Router,private route:ActivatedRoute) {
  }
  name : string ;
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.name = params.token;
    });
    console.log(this.name)
    this.authService.verify(this.name).subscribe(
        data=>{
          alert(data);
        },
        error => {
          console.log(error)
        }
    )

   /* let body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    let slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    let slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });*/
  }

  onClickSubmit(data : User) {

    this.authService.login(data ).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          console.log(data);
          this.goToHomePage();
        });

  }
  goToHomePage() {

    this.router.navigate(['/profile']);
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}

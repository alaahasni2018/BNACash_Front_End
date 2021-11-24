import { Component, OnInit } from '@angular/core';
import { User } from '../../../common/user';
import { AuthService } from '../../../_services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  constructor(private authService: AuthService , private router : Router,private route:ActivatedRoute) { }

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

  ngOnInit(): void {
  }

}

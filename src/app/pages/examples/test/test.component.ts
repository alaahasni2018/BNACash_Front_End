import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private connect = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.userService.isConnected()) {
      this.connect = true
    }
  }

}

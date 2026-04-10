import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.css',
  providers: [UserService]
})
export class JobsPageComponent implements OnInit {
  public title: string;
  public identity;

  constructor(
      private _userService: UserService
  ) {
      this.title = 'Bienvenido!';
  }

  ngOnInit() {
    console.log('[OK] Component: jobs-page');
    console.log('Social App Version: 0.2.0');
    this.identity = this._userService.getIdentity();
  }
}

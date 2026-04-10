import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'timeline-page',
    templateUrl: './timeline-page.component.html',
    styleUrl: './timeline-page.component.css',
    providers: [UserService]
})
export class TimelinePageComponent implements OnInit {
    public title: string;
    public identity;

    constructor(
        private _userService: UserService
    ) {
        this.title = 'Bienvenido!';
    }

    ngOnInit() {
        console.log('[OK] Component: timeline-page');
        console.log('Social App Version: 0.2.0');
        this.identity = this._userService.getIdentity();
    }

    onSubmit() {
    }
}

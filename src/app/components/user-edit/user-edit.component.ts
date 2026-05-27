import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {UploadService} from '../../services/upload.service';
import {GLOBAL} from '../../services/global';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrl: './user-edit.component.css',
    providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {
    public title: string;
    public user: User;
    public status: string;
    public identity;
    public token;
    public url: string;
    public filesToUpload: Array<File>;

    constructor(
        private _userService: UserService,
        private _uploadService: UploadService
    ) {
        this.title = 'Actualizar mis datos';
        this.user = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.identity = this.user;
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('[OK] Component: user-edit.');
    }

    onSubmit() {
        this._userService.updateUser(this.user).subscribe(
            response => {
                if (!response.user) {
                    this.status = 'error';
                } else {
                    this.status = 'success';
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    this.identity = this.user;
                    this._uploadService
                        .makeFileRequest(this.url + 'upload-image-user/' + this.user.id, [], this.filesToUpload, this.token, 'image')
                        .then((result: any) => {
                            this.user.image = result.user.image;
                            localStorage.setItem('identity', JSON.stringify(this.user));
                        });
                }
            },
            error => {
                var errorMessage = <any> error;
                console.log(errorMessage);
                if (errorMessage != null) {
                    this.status = 'error';
                }
            }
        );
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}

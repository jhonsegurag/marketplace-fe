import { Component } from '@angular/core';
import {Publication} from '../../models/publication';
import {GLOBAL} from '../../services/global';
import {UserService} from '../../services/user.service';
import {PublicationService} from '../../services/publication.service';

@Component({
  selector: 'posts-profile',
  templateUrl: './posts-profile.component.html',
  styleUrl: './posts-profile.component.css',
  providers: [UserService, PublicationService]
})
export class PostsProfileComponent {
  public identity;
  public token;
  public title: string;
  public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public publications: Publication[];
  public showImage;

  constructor(
      private _userService: UserService,
      private _publicationService: PublicationService
  ) {
      this.title = 'Profile';
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.url = GLOBAL.url;
      this.page = 1;
  }

  ngOnInit() {
      console.log('[OK] Component: posts-profile.');
      this.getPublications(this.page);
  }

  getPublications(page, adding = false) {
    this._publicationService.getPublicationUser(this.token, this.identity._id, page).subscribe(
      response => {
          if (response.publications) {
              this.total = response.total_items;
              this.pages = response.pages;
              this.itemsPerPage = response.item_per_page;
              //this.itemsPerPage = response.items_per_page;
              if (!adding) {
                  this.publications = response.publications;
              } else {
                  var arrayA = this.publications;
                  var arrayB = response.publications;
                  this.publications = arrayA.concat(arrayB);
                  $("html, body").animate({scrollTop: $('html').prop("scrollHeight")}, 500);
              }
              if (page > this.pages) {
                  //this._router.navigate(['/home']);
              }
          } else {
              this.status = 'error';
          }
      },
      error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          if (errorMessage != null) {
              this.status = 'error';
          }
      }
  );
  }

  public noMore = false;
  public showReplyFor: string | null = null;

  viewMore() {
      this.page += 1;
      if (this.page == this.pages) {
          this.noMore = true;
      }
      this.getPublications(this.page, true);
  }

  refresh(event = null) {
      this.getPublications(1);
  }

  showThisImage(id) {
      this.showImage = id;
  }

  hideThisImage() {
      this.showImage = 0;
  }

  deletePublication(id) {
      this._publicationService.deletePublication(this.token, id).subscribe(
          response => {
              this.refresh();
          },
          error => {
              console.log(<any>error);
          }
      );
  }
}

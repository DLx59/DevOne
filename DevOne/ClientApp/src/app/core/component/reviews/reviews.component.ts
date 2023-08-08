import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Reviews} from "../../models/reviews";
import {Translate} from "../../utils/translate";
import {GoogleService} from "../../services/google/google.service";
import {PaginationInstance} from "ngx-pagination";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent implements OnInit {
  public reviews: Array<Reviews> = new Array<Reviews>()
  public translate = Translate;
  public config: any;

  private configDefault: PaginationInstance = {
    id: 'default-pagination',
    itemsPerPage: 3,
    currentPage: 1,
  };
  private configMobile: PaginationInstance = {
    id: 'default-pagination',
    itemsPerPage: 1,
    currentPage: 1,
  };

  constructor(private googleService: GoogleService, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(max-width: 991px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.config = this.configMobile;
        } else {
          this.config = this.configDefault;
        }
      });
  }

  public ngOnInit() {
    const placeId = 'ChIJc6O1-M8lw0cRi9ibz0TdSWI';
    this.googleService.getGoogleReviews(placeId).subscribe(r => this.reviews = r);
  }

  public getSpinnerDestroyEvent(event: boolean) {
    if (event) {
      setTimeout(() => {
        const ulElement = document.querySelector('.ngx-pagination');
        if (ulElement) {
          ulElement.children[2].classList.add('d-none')
          const liElements = ulElement.querySelectorAll('li.small-screen');
          liElements.forEach(li => {
            li.className = 'show'
          });
        }
      }, 500);
    }
  }
}

// const review0 = new Reviews()
// review0.rating = 5;
// review0.text = 'DevOne a su donner vie à notre vision. Leur expertise et leur professionnalisme nous ont permis d\'obtenir un site internet à la hauteur de nos attentes.';
// review0.author_name = 'Pierre D'
// review0.profile_photo_url = 'https://lh3.googleusercontent.com/a-/AD_cMMToIymYV0OXEvzMLXMc1sgQ6s1rL9dwBTeXhQzsHM3PG8w=s128-c0x00000000-cc-rp-mo'
// const review1 = new Reviews()
// review1.rating = 5;
// review1.text = 'DevOne a su donner vie à notre vision. Leur expertise et leur professionnalisme nous ont permis d\'obtenir un site internet à la hauteur de nos attentes.';
// review1.author_name = 'Pierre D'
// review1.profile_photo_url = 'https://lh3.googleusercontent.com/a/AAcHTtf64ylxgUNtcS8mx1KFPy4kriehyx-81eecfVVHL_s=s128-c0x00000000-cc-rp-mo'
// const review2 = new Reviews()
// review2.rating = 5;
// review2.text = 'DevOne a su donner vie à notre vision. Leur expertise et leur professionnalisme nous ont permis d\'obtenir un site internet à la hauteur de nos attentes.';
// review2.author_name = 'Pierre D'
// review2.profile_photo_url = 'https://lh3.googleusercontent.com/a-/AD_cMMQSURBAv6Rx99W3OWeyTKhemTJ4i0KsmXc6ZBbaKIFoh1Q=s128-c0x00000000-cc-rp-mo'
// const review3 = new Reviews()
// review3.rating = 5;
// review3.text = 'DevOne a su donner vie à notre vision. Leur expertise et leur professionnalisme nous ont permis d\'obtenir un site internet à la hauteur de nos attentes.';
// review3.author_name = 'Pierre D'
// review3.profile_photo_url = 'https://lh3.googleusercontent.com/a/AAcHTtcc7vkvC_nW0OC-8To4Vr7RaS7o4fwPe3ocWn9Qkg_i=s128-c0x00000000-cc-rp-mo'
// this.reviews.push(review0)
// this.reviews.push(review1)
// this.reviews.push(review2)
// this.reviews.push(review3)

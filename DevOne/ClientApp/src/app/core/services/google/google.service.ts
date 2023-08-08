import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import {environment} from "../../../../environments/environment";

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(public http: HttpClient) {
  }

  public getGoogleReviews(placeId: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleAPIKey}&libraries=places`;
      script.onload = () => {
        const service = new google.maps.places.PlacesService(document.getElementById('googleMapScript')!.appendChild(script));

        service.getDetails({placeId: placeId}, (place: any, status: any) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            observer.next(place.reviews);
            observer.complete();
          } else {
            observer.error(status);
          }
        });
      };
      document.body.appendChild(script);
    });
  }
}


import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ContactModel} from "./model/contact-model";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) {
  }

  public sendMailAsync(contactModel: ContactModel): Observable<any> {
    let params = new HttpParams()
      .append('Name', contactModel.Name)
      .append('PhoneNumber', contactModel.PhoneNumber)
      .append('Email', contactModel.Email)
      .append('Website', contactModel.Website)
      .append('Content', contactModel.Content);

    return this.httpClient.post<any>(`${environment.apiUrl}/send`, "", {params});
  }
}

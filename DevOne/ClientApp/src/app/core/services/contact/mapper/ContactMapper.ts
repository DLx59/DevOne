import {Injectable} from "@angular/core";
import {ContactModel} from "../model/contact-model";
import {ContactFormModel} from "../../../models/contact-form-model";

@Injectable({
  providedIn: 'root',
})
export class ContactMapper {

  mapToContactModel(contactFormModel: ContactFormModel): ContactModel {
    const contactModel: ContactModel = new ContactModel();
    contactModel.Name = contactFormModel.name;
    contactModel.PhoneNumber = contactFormModel.phoneNumber;
    contactModel.Email = contactFormModel.mail;
    contactModel.Website = contactFormModel.website;
    contactModel.Content = contactFormModel.content;
    return contactModel;
  }

  mapToContactFormModel(contactModel: ContactModel): ContactFormModel {
    const contactFormModel: ContactFormModel = new ContactFormModel();
    contactFormModel.name = contactModel.Name;
    contactFormModel.phoneNumber = contactModel.PhoneNumber;
    contactFormModel.mail = contactModel.Email;
    contactFormModel.website = contactModel.Website;
    contactFormModel.content = contactModel.Content;
    return contactFormModel;
  }
}

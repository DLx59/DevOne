import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactFormModel} from "../../../core/models/contact-form-model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FieldPattern} from "../../../core/utils/field-pattern";
import {Translate} from "../../../core/utils/translate";
import {ContactService} from "../../../core/services/contact/contact.service";
import {ContactMapper} from "../../../core/services/contact/mapper/ContactMapper";
import {TranslateService} from "@ngx-translate/core";
import {ContactModel} from "../../../core/services/contact/model/contact-model";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent implements OnInit {
  @Input() submitButtonClass: string = '';
  @Input() isPhoneFormContact: boolean = false;
  public formGroup: FormGroup = new FormGroup<any>({});
  public model: ContactFormModel = new ContactFormModel();
  protected readonly translate = Translate;
  public isSend: boolean = false;
  public isSubmit: boolean = false;
  public isSucess: boolean = false;
  public resultMessage: string = '';

  public name: FormControl;
  public mail: FormControl;
  public phoneNumber: FormControl;
  public website: FormControl;
  public content: FormControl;
  public submitCase: FormControl;

  constructor(private contactService: ContactService, private contactMapper: ContactMapper, private translateService: TranslateService) {
    this.name = new FormControl('', [Validators.required]);
    this.mail = new FormControl('', [Validators.required, Validators.pattern(FieldPattern.mailPattern)]);
    this.phoneNumber = new FormControl('', [Validators.pattern(FieldPattern.phonePattern)]);
    this.website = new FormControl('');
    this.content = new FormControl('', [Validators.required]);
    this.submitCase = new FormControl(false, [Validators.required]);
  }

  public ngOnInit() {
    if (this.isPhoneFormContact) {
      this.name = new FormControl('', [Validators.required]);
      this.phoneNumber = new FormControl('', [Validators.required, Validators.pattern(FieldPattern.phonePattern)]);
      this.submitCase = new FormControl(false, [Validators.required]);
      this.mail = new FormControl('');
      this.content = new FormControl('');
    }

    this.formGroup = new FormGroup<any>({
        name: this.name,
        mail: this.mail,
        phoneNumber: this.phoneNumber,
        website: this.website,
        content: this.content,
        submitCase: this.submitCase,
      }
    )
  }

  public async onSubmit() {
    if (this.submitCase.value == false) {
      this.submitCase.setErrors({required: true});
      return;
    }

    if (this.formGroup.valid) {
      this.isSubmit = true;
      this.model = {
        name: this.formGroup.get('name')!.value,
        mail: this.formGroup.get('mail')!.value,
        phoneNumber: this.formGroup.get('phoneNumber')!.value,
        website: this.formGroup.get('website')!.value,
        content: this.formGroup.get('content')!.value,
        submitCase: this.formGroup.get('submitCase')!.value,
      };

      this.setDefaultValueIfNull();
      const contactModel: ContactModel = this.contactMapper.mapToContactModel(this.model);

      this.contactService.sendMailAsync(contactModel).subscribe({
          next: () => {
            this.resultMessage = this.translateService.instant(this.translate.contactFormSuccessMessage);
            this.isSubmit = false;
            this.isSucess = true;
            this.isSend = true;
          },
          error: (err) => {
            this.resultMessage = this.translateService.instant(this.translate.contactFormErrorMessage);
            this.isSubmit = false;
            this.isSucess = false;
            this.isSend = true;
            console.log('err', err);
          },
        }
      )
      setTimeout(() => {
        if (this.isSend)
          this.resetIsSend();
      }, 10 * 1000);
    }
  }

  public resetIsSend() {
    this.resultMessage = '';
    this.isSend = false;
  }

  public addErrorMargin(control: FormControl) {
    return control.invalid && control.touched;
  }

  public getErrorMessage(control: FormControl, type = ''): string {
    if (control.hasError('required') && type == 'checkbox')
      return this.translateService.instant(this.translate.contactErrorCheckCase);

    if (control.hasError('required'))
      return this.translateService.instant(this.translate.contactErrorRequired);

    if (control.hasError('email'))
      return this.translateService.instant(this.translate.contactErrorEmail);

    if (control.hasError('pattern') && type == 'phone')
      return this.translateService.instant(this.translate.contactErrorPhone);

    if (control.hasError('pattern') && type == 'mail')
      return this.translateService.instant(this.translate.contactErrorEmailPattern);

    return '';
  }

  private setDefaultValueIfNull() {
    const notRequired: string = '-';
    if (!this.model.phoneNumber) {
      this.model.phoneNumber = notRequired
    }
    if (!this.model.mail) {
      this.model.mail = notRequired
    }
    if (!this.model.website) {
      this.model.website = notRequired
    }
    if (!this.model.content) {
      this.model.content = notRequired
    }
  }
}

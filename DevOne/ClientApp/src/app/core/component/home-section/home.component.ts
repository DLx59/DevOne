import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Reviews} from "../../models/reviews";
import {Translate} from "../../utils/translate";
import {Utils} from "../../utils/utils";
import * as workflow from '../../../../assets/json/workflow.json';
import * as services from "../../../../assets/json/services.json"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @Input() numberOfProject: number = 4;
  @Input() satisfiedCompanies: number = 4;
  public hasChar: boolean = false;
  public reviews: Array<Reviews> = [];
  public translateDynamic = Translate as any
  public age: string = '';
  protected readonly translate = Translate;
  protected readonly workflow = workflow;
  protected readonly services = services;

  public ngOnInit() {
    this.hasChar = this.checkSatisfiedCompaniesNumber();
    this.age = String(Utils.getAge(new Date('1995-10-02')));
  }

  public checkSatisfiedCompaniesNumber(): boolean {
    if (this.satisfiedCompanies >= 5 && (this.satisfiedCompanies % 5 === 0 || this.satisfiedCompanies % 5)) {
      this.satisfiedCompanies = this.satisfiedCompanies - (this.satisfiedCompanies % 5);
      return true;
    }
    return false;
  }

  public addChar(): string {
    if (this.hasChar) {
      return '+'
    }

    return '';
  }
}

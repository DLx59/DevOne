import {Component, Input} from '@angular/core';
import {Reviews} from "../../../../models/reviews";
import {PaginationInstance} from "ngx-pagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() reviews: Array<Reviews> = new Array<Reviews>()
  @Input() config: PaginationInstance = {
    id: 'default-pagination',
    itemsPerPage: 3,
    currentPage: 1
  };

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
  };

  public onPageChange(number: number) {
    this.config.currentPage = number;
  }
}

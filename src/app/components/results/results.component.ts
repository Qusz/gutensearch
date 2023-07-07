import { Component } from '@angular/core';
import { GetDataService } from '@/app/services/get-data/get-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  constructor(public getDataService: GetDataService) {}

  public header = ['', 'Title', 'Author', 'Topics', 'Download'];
  
  public handlePageChange(direction: 'next' | 'prev') {
    this.getDataService.changePage(direction);
  }
}

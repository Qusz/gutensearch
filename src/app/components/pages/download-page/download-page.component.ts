import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetDataService } from '@/app/services/get-data/get-data.service';

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html'
})
export class DownloadPageComponent implements OnInit {
  public index: number;

  constructor(private route: ActivatedRoute, public getDataService: GetDataService) {}

  ngOnInit(): void {
    this.index = Number(this.route.snapshot.paramMap.get('id')) - 1;
  }
}

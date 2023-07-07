import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetDataService } from '@/app/services/get-data/get-data.service';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  public searchControl: FormControl = new FormControl('');
  private destroy$ = new Subject<void>();

  constructor(private getDataService: GetDataService) {}

  private getData(searchTerm: string): void {
    this.getDataService.getData(searchTerm);
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(500), 
      takeUntil(this.destroy$)
    ).subscribe(searchTerm => {
      this.getData(searchTerm);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

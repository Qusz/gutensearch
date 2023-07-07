import { ApiResponse } from '@/models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ErrorHandlingService } from '../error-handling/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private API_URL = 'https://gutendex.com/books';
  
  private searchResultsSubject = new BehaviorSubject<ApiResponse | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private pageSubject = new BehaviorSubject<number>(1);

  public loading$ = this.loadingSubject.asObservable();
  public searchResults$ = this.searchResultsSubject.asObservable();

  public get currentPage() {
    return this.pageSubject.getValue();
  }

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService) {}

  public getData(searchTerms: string): void {
    this.loadingSubject.next(true);

    if (searchTerms.trim() === "") {
      this.searchResultsSubject.next(null);
      this.loadingSubject.next(false);
      return;
    }

    const params = new HttpParams().set('search', searchTerms);

    this.sendRequest(this.API_URL, params);
    this.pageSubject.next(1);
  }

  public changePage(direction: 'next' | 'prev') {
    if (!this.searchResultsSubject.value) return;
    this.loadingSubject.next(true);

    const url = direction === 'next' 
      ? this.searchResultsSubject.value.next 
      : this.searchResultsSubject.value.previous;
    
    direction === 'next'  
      ? this.pageSubject.next(this.currentPage + 1)
      : this.pageSubject.next(this.currentPage - 1); 

    if (!url) return;

    this.sendRequest(url);
  }

  private sendRequest(url: string, params?: HttpParams): void {
    this.http.get<ApiResponse>(url, { params })
      .subscribe({
        next: (response) => {
          this.searchResultsSubject.next(response);
          this.loadingSubject.next(false);
        },
        error: (error: HttpErrorResponse) => {
          this.loadingSubject.next(false);
          this.errorHandlingService.handleHttpError(error);
        }
      });
  }
}

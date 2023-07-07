import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../toast-service/toast-service.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(private toast: ToastService) {}

  public handleHttpError(error: HttpErrorResponse): void {
    this.toast.showError(error.message);
    throw new Error(error.message);
  }
}
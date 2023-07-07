import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public showError(message: string) {
    this.toastr.error(message, 'Error!', {
      positionClass: 'toast-top-center'
    });
  }
}

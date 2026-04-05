import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  tostr = inject(ToastrService);
  submit(){
this.tostr.info(
  'La periode d\'essai gratuite est terminée, veuillez contacter l\'administrateur au +223 71 96 31 54 pour plus d\'informations.',
  'Accès restreint',
  {
    timeOut: 10000,
    closeButton: true,
    progressBar: true,
    tapToDismiss: true,
    positionClass: 'toast-center-center'
  }
);
  }
}

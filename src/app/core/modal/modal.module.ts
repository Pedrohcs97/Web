import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalValidacaoComponent } from './modal-validacao/modal-validacao.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule
  ],
  declarations: [ModalValidacaoComponent]
})
export class ModalModule { }

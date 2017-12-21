import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-validacao',
  templateUrl: './modal-validacao.component.html'
})
export class ModalValidacaoComponent {
  @Input() id;
  @Input() index;
  @Input() titulo;
  @Input() descricao;
  @Output() remover = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  /**
   * Emite o evento para exclusão do valor.
   */
  public exclusaoConfirmada(): void {
    this.remover.emit({ id: this.id, index: this.index });
  }

  /**
   * Método responsável por fechar o modal.
   */
  public fecharModal(): void {
    this.activeModal.close();
  }
}

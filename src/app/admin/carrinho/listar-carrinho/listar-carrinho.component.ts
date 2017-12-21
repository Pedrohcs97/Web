
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../carrinho';
import { Categoria } from '../../categoria/lista-categoria/categoria';
import { ModalValidacaoComponent } from '../../../core/modal/modal-validacao/modal-validacao.component';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Produto } from '../../produto/lista-produto/produto';

@Component({
    selector: 'app-listar-carrinho',
    templateUrl: './listar-carrinho.component.html',
    styleUrls: ['./listar-carrinho.component.css']
})
export class ListarCarrinhoComponent implements OnInit {

    produtos: Produto[];
    categoria: Categoria;
    // private modalService: NgbModal;

    private selectProduto: Produto;
    private selectIndex: number;
    private modalRef: BsModalRef;

    constructor(
        private toast: ToastrService,
        private modalService: BsModalService,
        private carrinhoService: CarrinhoService

    ) { }

    public openModal(template: TemplateRef<any>, produto: Produto, index: number): void {
        this.selectIndex = index;
        this.selectProduto = produto;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }

    ngOnInit() {

    }

}
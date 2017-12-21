
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { Categoria } from '../../categoria/lista-categoria/categoria';
import { ModalValidacaoComponent } from '../../../core/modal/modal-validacao/modal-validacao.component';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CarrinhoService} from '../../carrinho/carrinho.service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[];
  categoria: Categoria;
  // private modalService: NgbModal;

  private selectProduto: Produto;
  private selectIndex: number;
  private modalRef: BsModalRef;


  // mostrarProdutos: boolean = true;
  
  constructor(
    private toast: ToastrService,
    private modalService: BsModalService,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService

  ) { }

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .then(response => {
        this.produtos = response;
        // this.toast.success('Sucesso ao listar', 'success');
      })
      .catch(error => {
        console.log(' ----- ERROR ----- ' + error.message);
      });
  }

  private adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  public openModal(template: TemplateRef<any>, produto: Produto, index: number): void {
    this.selectIndex = index;
    this.selectProduto = produto;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  deleteProduto(id: number, index: number) {
    this.produtoService.deleteProduto(id)
      .then(result => {
        
        this.produtos.splice(index, 1);
        this.hideModal();
        this.toast.success("Sucesso ao Excluir!", 'success');
        console.log(" ------------ TOAST ------------");
        console.log(result);
      })
      .catch(error => {
        
        console.log(" ------------ AQUI ------------");
      })
    console.log("Id do produto = " + id);
  }

  hideModal(): void{
    this.modalRef.hide();
  }
  
}


import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {CarrinhoService} from './carrinho.service'
import {Produto} from '../produto/lista-produto/produto'
import {Subscription} from 'rxjs/Subscription';
import {Carrinho} from '../carrinho/carrinho';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

    loaded : boolean = true

    produtos : Produto[] = [];

    private subscription : Subscription;

    constructor(private carrinhoService: CarrinhoService) { }

    ngOnInit() {
        this.subscription = this.carrinhoService.Carrinho.
        subscribe((state: Carrinho) =>{
            this.produtos = state.produtos;
        })

    }

    adicionarProduto(produto: Produto){
        this.carrinhoService.adicionarProduto(produto);
    }

    removerProduto(id: number){
        this.carrinhoService.removerProduto(id);
    }
}

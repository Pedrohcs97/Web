import { Injectable } from '@angular/core';

import {Http, Headers, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

import {CarrinhoComponent} from './carrinho.component';
import {Produto} from '../produto/lista-produto/produto'
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Carrinho} from './carrinho'


@Injectable()
export class CarrinhoService {
    private carrinho = new Subject<Carrinho>();
    produtos: Produto[] = [];
    Carrinho = this.carrinho.asObservable();

    public API_URL: string = 'http://localhost:8080';
    
    constructor(public http : Http){}

    adicionarProduto(produto: Produto){
        this.produtos.push(produto);
        this.carrinho.next(<Carrinho>{loaded: true, produtos:  this.produtos});
        console.log("Produto " + produto.nome + " size = " + this.produtos.length)
    }

    removerProduto(id: number){
     this.produtos = this.produtos.filter(produto => produto.id == id)
    }

   
}
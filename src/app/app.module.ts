import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Adicionar o modulo HTTP
import { HttpModule } from '@angular/http';

//Adicionar as rotas
import { appRoutingProviders, routing } from './app.routes';

// importar todos os componentes
import { ProdutoComponent } from './admin/produto/lista-produto/produto.component';
import { CategoriaComponent } from './admin/categoria/lista-categoria/categoria.component';
import { NovoProdutoComponent } from './admin/produto/novo-produto/novo-produto.component';
import { NovaCategoriaComponent } from './admin/categoria/nova-categoria/nova-categoria.component';
import { VisualizarProdutoComponent } from './admin/produto/visualizar-produto/visualizar-produto.component';
import { VisualizarCategoriaComponent } from './admin/categoria/visualizar-categoria/visualizar-categoria.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarrinhoComponent } from './admin/carrinho/carrinho.component';
import { ListarCarrinhoComponent} from './admin/carrinho/listar-carrinho/listar-carrinho.component'

// import { ModalModule } from './core/modal/modal.module';
// import { ModalValidacaoComponent } from "./core/modal/modal-validacao/modal-validacao.component";

// Importar todos os Serviços
import { ProdutoService } from './admin/produto/lista-produto/produto.service';
import { CategoriaService } from './admin/categoria/lista-categoria/categoria.service';
import { CarrinhoService } from './admin/carrinho/carrinho.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CategoriaComponent,
    NovoProdutoComponent,
    NovaCategoriaComponent,
    VisualizarProdutoComponent,
    VisualizarCategoriaComponent,
    CarrinhoComponent,
    ListarCarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
    NgbModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    ProdutoService,
    CategoriaService,
    ToastrService,
    CarrinhoService
  ],
  bootstrap: [AppComponent],

})

export class AppModule { }

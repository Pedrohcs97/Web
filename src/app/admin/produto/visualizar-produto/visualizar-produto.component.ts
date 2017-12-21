import { Component, OnInit } from '@angular/core';
import { Produto } from '../lista-produto/produto';
import { ProdutoService } from '../lista-produto/produto.service';

import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {

  produto: Produto;
  
  public id: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    
    this.produto = new Produto();

    this.produto.id = this.route.snapshot.params['id'];

    this.produtoService.getProduto(this.produto.id)
      .then(response => {
        this.produto = response;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

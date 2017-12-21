import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Produto } from '../../produto/lista-produto/produto';
import { Categoria } from '../../categoria/lista-categoria/categoria';
import { CategoriaService } from '../../categoria/lista-categoria/categoria.service';
import { ProdutoService } from '../../produto/lista-produto/produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent {

  produto: Produto;
  categorias: Categoria[];

  constructor(private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService) {
    this.produto = new Produto();
    this.produto.id = 0;
    this.produto.categoria = new Categoria();

    this.categoriaService.getCategorias().then(
      response => {
        this.categorias = response;
        console.log(response)
      }
    ).catch(error => console.log(error));

    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) { this.carregarProduto(id); }
  }

  public carregarProduto(id): void {
    this.produtoService.getProduto(id).then(
      response => {
        this.produto = response;
        console.log(response)
      }
    ).catch(error => console.log(error));
  }

  salvarProduto(produtoForm: any): void {
    let produto = produtoForm.value;
    console.log("AEEEEW!!!");

    this.produtoService.salvarProduto(produto).then(res => {
      this.toast.success("Sucesso ao Salvar!", "success");
      this.voltar();
    }).catch(error => console.log(error));

  }

  public voltar(): void {
    this.router.navigate(['/produto']);
  }

}

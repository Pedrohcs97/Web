import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import {CategoriaService} from './categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias : Categoria[];

  constructor(
    private categoriaService : CategoriaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.categoriaService.getCategorias()
    .then(result => {
      this.categorias = result;        
    })
    .catch( error => {
      
    });
   }

   deleteCategoria(id:number){
    this.categoriaService.deleteCategoria(id)
      .then( result => {        
          window.location.reload();      
      })
      .catch(error => {
      })
  
  }

  
  salvarProduto(categoriaForm: any): void {
    let categoria = categoriaForm.value;
    this.categoriaService.salvarCategoria(categoria).then(res => {
      this.voltar();
    }).catch(error => console.log(error));
  }

  public voltar(): void {
    this.router.navigate(['/produto']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Categoria } from '../lista-categoria/categoria';
import { CategoriaService } from '../lista-categoria/categoria.service';

import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-visualizar-categoria',
  templateUrl: './visualizar-categoria.component.html',
  styleUrls: ['./visualizar-categoria.component.css']
})
export class VisualizarCategoriaComponent implements OnInit {

  categoria : Categoria;
  
  public id: any;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    
    this.categoria= new Categoria();

    this.categoria.id = this.route.snapshot.params['id'];

    this.categoriaService.getCategoria(this.categoria.id)
      .then(response => {
        this.categoria = response;
      })
      .catch(error => {
        console.log(error);
      })

      
  }

}

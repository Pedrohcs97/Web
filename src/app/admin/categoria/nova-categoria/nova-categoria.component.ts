import { Component, OnInit } from '@angular/core';
import { Categoria } from '../lista-categoria/categoria';
import { CategoriaService } from '../lista-categoria/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['./nova-categoria.component.css']
})
export class NovaCategoriaComponent implements OnInit {

  categoria : Categoria;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService) { 
      this.categoria = new Categoria();
      this.categoria.id = 0;
        
      this.categoriaService.getCategorias().then(
        response => {
          this.categoria = response;
          console.log(response)
        }
      ).catch(error => console.log(error));
  
      const id = this.route.snapshot.paramMap.get('id');
      if (id != null) { this.carregarCategoria(id); }
    }

    public carregarCategoria(id): void {
      this.categoriaService.getCategoria(id).then(
        response => {
          this.categoria = response;
          console.log(response)
        }
      ).catch(error => console.log(error));
    }

    salvarCategoria(categoriaForm: any): void {
      let categoria = categoriaForm.value;
      console.log("AEEEEW!!!");
      this.categoriaService.salvarCategoria(categoria).then(res => {
        response => {
          this.carregarCategoria = response;
        }
      }).catch(error => console.log(error));
      
      this.voltar();
    }
  
    public voltar(): void {
      this.router.navigate(['/categoria']);
    }

  ngOnInit() {
  }

}

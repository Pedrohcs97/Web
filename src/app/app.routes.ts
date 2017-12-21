import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent} from './admin/categoria/lista-categoria/categoria.component'
import { ProdutoComponent } from './admin/produto/lista-produto/produto.component';
import { NovoProdutoComponent} from './admin/produto/novo-produto/novo-produto.component';
import { NovaCategoriaComponent} from './admin/categoria/nova-categoria/nova-categoria.component';
import { VisualizarProdutoComponent} from './admin/produto/visualizar-produto/visualizar-produto.component';
import { VisualizarCategoriaComponent} from './admin/categoria/visualizar-categoria/visualizar-categoria.component';
import { ListarCarrinhoComponent} from './admin/carrinho/listar-carrinho/listar-carrinho.component'

export const routes : Routes =[
    {path: '', redirectTo: 'produto', pathMatch: 'full' },
    {path: 'produto', component: ProdutoComponent },
    {path: 'novo-produto', component: NovoProdutoComponent},
    {path: 'nova-categoria', component: NovaCategoriaComponent},
    {path: 'visualizar-produto/:id', component: VisualizarProdutoComponent},
    {path: 'visualizar-categoria/:id', component: VisualizarCategoriaComponent},
    {path: 'alterar-produto/:id', component: NovoProdutoComponent},
    {path: 'alterar-categoria/:id', component: NovaCategoriaComponent},
    {path: 'novo-categoria', component: NovaCategoriaComponent},
    {path: 'categoria', component: CategoriaComponent},
    {path: 'listar-carrinho', component: ListarCarrinhoComponent}
];

export const appRoutingProviders: any[] = [];
    
export const routing = RouterModule.forRoot(routes);
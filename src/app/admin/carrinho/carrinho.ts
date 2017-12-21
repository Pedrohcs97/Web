import { Produto } from './../produto/lista-produto/produto';

export interface Carrinho {
 loaded: boolean;
 produtos: Produto[];

}
import {Categoria} from '../../categoria/lista-categoria/categoria';

export class Produto{
    id: number;
    nome: String;
    preco: number;
    descricao: string;
    categoria: Categoria;

    public Produto(
        id: number = 0,
        nome: string = '',
        preco: number = 0.0,
        descricao: string = '',
        categoria: Categoria = null
      ) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
      }
}
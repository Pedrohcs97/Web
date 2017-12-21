export class Categoria{
    id: number;
    nome: String;

    public Categoria(
        id: number = 0,
        nome: string = ''
      ) {
        this.id = id;
        this.nome = nome;
      }
}
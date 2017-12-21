import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServiceAbstract {
  private headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  private baseUrl = 'http://localhost:8080/';
  private url: string;

  /**
     * Construtor da classe abstrata de servicos.
     *
     * @param servico
     */
  constructor(servico: string) {
    this.url = this.baseUrl + servico;
  }

  /**
     * Retorna a url do serviço especifícado.
     *
     * @returns {string}
     */
  getUrl(): string {
    return this.url;
  }

  /**
     * Retorna os headers necessários para realizar requisições ao servidor;
     */
  getHeaders(): any {
    return { headers: this.headers };
  }

  /**
     * Responsável por tratar os dados retornados pela requisição.
     *
     * @param res
     * @returns {any|{}}
     */
  extractData(res: Response): any {
    const body = res.json();
    return body || {};
  }

  /**
     * Responsável por fazer o tratamento dos erros retornados pela requisição.
     *
     * @param error
     * @returns {any}
     */
  handleError(error: Response | any) {
    const body = error._body ? JSON.parse(error._body) : '';
    return Observable.throw({ 'mensagem': body.message });
  }
}

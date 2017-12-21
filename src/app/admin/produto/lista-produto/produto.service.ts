import { Injectable } from '@angular/core';

import { Http, Headers, HttpModule, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

    public API_URL: string = 'http://localhost:8080';

    constructor(public http: Http) { }

    getProdutos(): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/produto`)
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data.content)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

    getProduto(id: number): any {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.API_URL}/produto/${id}`, )
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data.content)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

    deleteProduto(id: number): any {
        return new Promise((resolve, reject) => {
            this.http
                .delete(`${this.API_URL}/produto/${id}`)
                .map(res => res.json())
                .subscribe(
                data => {
                    resolve(data)
                },
                error => {
                    reject(error);
                }
                )
        });
    }

    salvarProduto(produto: Produto): any {
        if (produto.id === 0 || produto.id === undefined) {
            console.log('salvando');
            
            return new Promise((resolve, reject) => {
                this.http
                    .post(`${this.API_URL}/produto`, produto)
                    .map(res => res.json())
                    .subscribe(
                    data => {
                        resolve(data)
                    },
                    error => {
                        reject(error);
                    }
                    )
            });
        } else {
            console.log('alterando');
            
            return new Promise((resolve, reject) => {
                this.http
                    .put(`${this.API_URL}/produto/${produto.id}`, produto)
                    .map(res => res.json().content)
                    .subscribe(
                    data => {
                        resolve(data)
                    },
                    error => {
                        reject(error);
                    }
                    )
            });
        }
    }

}
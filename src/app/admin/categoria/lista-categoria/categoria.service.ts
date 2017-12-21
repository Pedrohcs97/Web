import { Injectable } from '@angular/core';

import {Http, Headers, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

import {Categoria} from './categoria';

@Injectable()
export class CategoriaService {

    public API_URL: string = 'http://localhost:8080';
    
    constructor(public http : Http){}

    getCategorias(): any{
        return new Promise((resolve, reject) => {
            this.http
                    .get(`${this.API_URL}/categoria`)
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

    getCategoria(id): any{
        return new Promise((resolve, reject) => {
            this.http
                    .get(`${this.API_URL}/categoria/${id}`)
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

    alterarCategoria(categoria : Categoria): any{
        return new Promise((resolve, reject) => {
            this.http
                    .put(`${this.API_URL}/categoria/`, categoria)
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

    deleteCategoria(id:number): any{
        return new Promise((resolve, reject) => {
            this.http
                    .delete(`${this.API_URL}/categoria/${id}`)
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

    salvarCategoria(categoria: Categoria): any {
        if (categoria.id === 0 || categoria.id === undefined) {
            console.log('salvando');
            
            return new Promise((resolve, reject) => {
                this.http
                    .post(`${this.API_URL}/categoria`, categoria)
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
                    .put(`${this.API_URL}/categoria/${categoria.id}`, categoria)
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
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';

@Injectable()
export class OfertasService{

  constructor(private http: HttpClient){}

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta)
  }

  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number) : Promise<Oferta> {
    return this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then(( resposta => {
      return resposta[0];
    }))
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then(( resposta => {
      return resposta[0].descricao
    }))
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then(( resposta => {
      return resposta[0].descricao
    }))
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
    .pipe(
      retry(10),
      map((resposta: any)=> resposta)
    )
  }
}

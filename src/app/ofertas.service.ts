import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Oferta } from './shared/oferta.model'
import { URL_API } from './app.api';

@Injectable()
export class OfertasService{

  //private url_api = 'http://localhost:3000/ofertas'

  constructor(private http: HttpClient){}

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?destaque=true`)
        .toPromise()
        //.then((resposta: any) => resposta.json())

        .then((resposta: any) => resposta)
  }

  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        //.then((resposta: any) => resposta.json())
        .then((resposta: any) => resposta)
  }

  public getOfertaPorId(id: number) : Promise<Oferta> {
    return this.http.get<Oferta[]>(`${URL_API}?id=${id}`)
    .toPromise()
    .then(( resposta => {
      // console.log(o.shift())
      return resposta.shift();
    }))
  }
}

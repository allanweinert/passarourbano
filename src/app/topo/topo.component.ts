import { Component, OnInit } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged , catchError} from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), //executa a ação do switchMap após 1 segundo
      distinctUntilChanged(), //para realizar pesquisa distintas
      switchMap((termo: string) => {

        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }),
      catchError(
        (erro : any, observable : Observable<Oferta[]>) => {
          return of<Oferta[]>([]);
        }
      )
    )
  }

  public pesquisa (termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}

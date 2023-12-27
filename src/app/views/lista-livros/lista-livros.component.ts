import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, map, switchMap } from 'rxjs';
import { Item, Livro, ResultadoDaBuscaDeLivros } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Livro[];
  valorDigitado: string;
  subscription: Subscription;
  retornoDaApi$: Observable<ResultadoDaBuscaDeLivros>;

  constructor(private service: LivroService) { }

  buscarLivros() {
    this.service.buscarLivros(this.valorDigitado).subscribe(
      (resultadoDaBuscaDeLivros) => {
        this.listaLivros = this.transformaListaDeItensEmListaDeLivros(resultadoDaBuscaDeLivros.items);
      }
    )
  }

  transformaListaDeItensEmListaDeLivros(listaDeItens: Item[]) {
    const listaDeLivros: Livro[] = [];
    listaDeItens.forEach((item) => {
      listaDeLivros.push(
        {
          title: item.volumeInfo?.title,
          authors: item.volumeInfo?.authors,
          publisher: item.volumeInfo?.publisher,
          publishedDate: item.volumeInfo?.publishedDate,
          description: item.volumeInfo?.description,
          infoLink: item.volumeInfo?.infoLink,
          thumbnail: item.volumeInfo?.imageLinks
        }
      )
    })
    return listaDeLivros;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}




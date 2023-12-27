import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoria'
})
export class AutoriaPipe implements PipeTransform {

  transform(listaDeAutores: string[]): string {
    const primeiroAutorDaLista = listaDeAutores[0];
    return primeiroAutorDaLista;
  }

}

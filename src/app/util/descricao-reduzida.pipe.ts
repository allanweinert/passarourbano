import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, truncarEm: number, iniciarEm: number): string {
    if (texto.length >15) {
      return texto.substr(iniciarEm, truncarEm) + '...'
    }
    return texto
  }
}

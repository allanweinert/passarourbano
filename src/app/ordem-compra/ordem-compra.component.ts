import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controle de validações dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //estado primitivo dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean
  public numeroEstadoPrimitivo: boolean
  public complementoEstadoPrimitivo: boolean
  public formaPagamentoEstadoPrimitivo: boolean

  constructor() { }

  ngOnInit() {
  }

  //Atribui ao atributo o valor do parâmetro
  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(this.endereco)

    this.enderecoEstadoPrimitivo = false

    //se a string for maior que 3
    if( this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    //console.log(this.numero)

    this.numeroEstadoPrimitivo = false

    //se a string for maior ou igual a 1
    if( this.numero.length >= 1) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //console.log(this.complemento)

    this.complementoEstadoPrimitivo = false

    if( this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    //console.log(this.formaPagamento)

    this.formaPagamentoEstadoPrimitivo = false

    //se a string for maior que 0
    if( this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
  }


}

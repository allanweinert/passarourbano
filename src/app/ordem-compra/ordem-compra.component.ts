import { Component, OnInit } from '@angular/core';

import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('','','','')

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
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar botão confirmar compra
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
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
    this.habilitarForm()
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
    this.habilitarForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //console.log(this.complemento)

    this.complementoEstadoPrimitivo = false

    if( this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    }
    this.habilitarForm()
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
    this.habilitarForm()
  }

  public habilitarForm(): void {
    if(this.enderecoValido && this.numeroValido && this.formaPagamentoValido){
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento

    this.ordemCompraService.efetivarCompra(this.pedido)
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultDialogService {

  dadosInform!: string

  getDados(): string {
    return this.dadosInform
  }

  setDados(dados: string) {
     this.dadosInform = dados
  }
}

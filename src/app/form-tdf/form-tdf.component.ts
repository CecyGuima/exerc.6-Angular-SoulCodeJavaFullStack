import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxdialogComponent } from '../boxdialog/boxdialog.component';
import { ResultDialogService } from '../dialog/result-dialog.service';

@Component({
  selector: 'app-form-tdf',
  templateUrl: './form-tdf.component.html',
  styleUrls: ['./form-tdf.component.css']
})
export class FormTDFComponent {

  nome: string = ''
  sobrenome: string = ''
  nomeusuario: string = ''
  CPF: string = ''
  endereco: string = ''
  complemento: string = ''
  contato: string = ''
  senha: string = ''
  confsenha: string = ''

  constructor(public boxDialog: MatDialog, private resultDialogService: ResultDialogService) { }

  caixaDialog(): void {
    this.resultDialogService.setDados(`
    *NOME: ${this.nome},
    *SOBRENOME: ${this.sobrenome} ,
    *CPF: ${this.CPF},
    *CONTATO: ${this.contato}.
    `)

    let dialogRef = this.boxDialog.open(BoxdialogComponent, {width: '320px', height: '230px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dados Informados:`);
    });
  }

  confirmarSenhas(senha: any, confsenha: any): boolean{
    return !(senha === confsenha)
  }
}

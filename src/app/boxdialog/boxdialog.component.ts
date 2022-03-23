import { Component, OnInit } from '@angular/core';
import { ResultDialogService } from '../dialog/result-dialog.service';

@Component({
  selector: 'app-boxdialog',
  templateUrl: './boxdialog.component.html',
  styleUrls: ['./boxdialog.component.css']
})
export class BoxdialogComponent implements OnInit {

  dados: string = this.resultDialogService.getDados()

  constructor(private resultDialogService: ResultDialogService) { }

  ngOnInit(): void {
    this.dados = this.resultDialogService.getDados()
  }

}

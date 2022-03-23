import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BoxdialogComponent } from '../boxdialog/boxdialog.component';
import { ResultDialogService } from '../dialog/result-dialog.service';

@Component({
  selector: 'app-form-rf',
  templateUrl: './form-rf.component.html',
  styleUrls: ['./form-rf.component.css']
})

export class FormRFComponent {

  name: string = ''
  lastname: string = ''
  username: string = ''
  CPF: string = ''
  address: string = ''
  complement: string = ''
  telephone: string = ''
  password1: string = ''
  confPassword: string = ''


  personalData: FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required]),
    lastname: new FormControl ('', [Validators.required]),
    username: new FormControl (''),
    CPF: new FormControl ('', [Validators.required]),
    address: new FormControl ('', [Validators.required]),
    complement: new FormControl (''),
    password1: new FormControl ('', [Validators.required]),
    confPassword: new FormControl ('', [Validators.required]),
    tels: new FormArray ([
      new FormControl('', [Validators.required])
    ])
  })

  tels: FormArray = this.personalData.get('tels') as FormArray

  constructor(public boxDialog: MatDialog, private resultDialogService: ResultDialogService) { }

  caixaDialog2(): void {
    this.resultDialogService.setDados(`
    *NAME: ${this.personalData.controls['name'].value},
    *LASTNAME: ${this.personalData.controls['lastname'].value},
    *USERNAME: ${this.personalData.controls['username'].value},
    *INDIV.REGIST: ${this.personalData.controls['CPF'].value},
    *PHONE: ${this.personalData.controls['tels'].value}.
    `)

    let dialogRef = this.boxDialog.open(BoxdialogComponent, {width: '320px', height: '250px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Informed Data:`);
    });
  }

  newContact(): void {
    this.tels.push(new FormControl('', [Validators.required]))
  }

  deleteContact(): void {
    this.tels.controls = this.tels.controls.filter((x, index) => {
      return index != this.tels.controls.length -1
    })
  }
  
  confirmPassword(pw: any, confpw: any): boolean{
    return !(pw === confpw)
  }
}

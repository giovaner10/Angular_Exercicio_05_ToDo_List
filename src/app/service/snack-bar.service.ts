import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MatSnackBarService {

    constructor(
        private matSnackBar: MatSnackBar) { }
    
        removido() {
            this.matSnackBar.open("Tarefa concluida", '', {
                duration: 1000});
          }

          adcionado() {
            this.matSnackBar.open("Nova Tarefa adicionada", "",{
                duration: 500});
          }

          apagarTudo() {
            this.matSnackBar.open("Lista de atividades limpa", "",{
                duration: 3000});
          }
    
    
}
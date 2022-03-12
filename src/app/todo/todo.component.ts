import { Component, HostListener } from '@angular/core';
import { MatSnackBarService } from '../service/snack-bar.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(
    private matSnackBarService: MatSnackBarService) { }  

  item: string = ''

  pendentes: number = 0


  adicionarTarefa(input: string) {
    this.tarefas.push(input)

    this.pendentes = this.tarefas.length

    this.setBanco(this.tarefas)

    this.matSnackBarService.adcionado()
  }

  removerTarefa(remove: string) {
    this.tarefas.splice(this.tarefas.indexOf(remove), 1)

    this.pendentes = this.tarefas.length

    this.setBanco(this.tarefas)

    this.matSnackBarService.removido()
  }

  clearAll() {
    this.tarefas.splice(0, this.tarefas.length)

    this.pendentes = this.tarefas.length

    this.setBanco(this.tarefas)

    this.matSnackBarService.apagarTudo()
  }


  //local storage
  tarefas: string[] = this.getBanco()


  getBanco():any {
   return JSON.parse(localStorage.getItem('todoList') || '[]')
  }

  setBanco(banco: any){
    localStorage.setItem('todoList', JSON.stringify(banco))
  }

  @HostListener('onload')
  loadData(): void{
    this.adicionarTarefa = this.getBanco()
  }
}

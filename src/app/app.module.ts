import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { BtnDeleteDirective } from './directives/btn-delete.directive';
import { BtnAddDirective } from './directives/btn-add.directive ';
import { BtnClearDirective } from './directives/btn-clear.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BtnDeleteDirective,
    BtnAddDirective,
    BtnClearDirective
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

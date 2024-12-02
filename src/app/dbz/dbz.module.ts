import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FormComponent } from './components/form/form/form.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';





@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent           // Add Character
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapTextPipe } from './wrap-text.pipe';

@NgModule({
  declarations: [WrapTextPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

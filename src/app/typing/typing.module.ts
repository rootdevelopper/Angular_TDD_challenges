import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { TypingComponent } from './typing.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TypingComponent],
  imports: [
    CommonModule,
    TypingRoutingModule,
    MatCardModule
  ]
})
export class TypingModule { }

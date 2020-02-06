import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTabsModule,
  MatToolbarModule,
  MatExpansionModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class MaterialModule { }

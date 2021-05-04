import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const modules = [MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatDividerModule,
  MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatDialogModule,]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules],
  providers: [MatNativeDateModule, { provide: MatDialogRef, useValue: {} },

    { provide: MAT_DIALOG_DATA, useValue: {} }]
})
export class MaterialModule { }

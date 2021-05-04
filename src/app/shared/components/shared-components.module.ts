import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleHelperComponent } from './style-helper/style-helper.component';


const components = [StyleHelperComponent]
@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class SharedComponentsModule { }

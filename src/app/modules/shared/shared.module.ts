import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgmaterialModule } from '~/app/ngmaterial/ngmaterial.module';

@NgModule({
  imports: [
    CommonModule,
    NgmaterialModule,
    RouterModule
  ]
})
export class SharedModule { }

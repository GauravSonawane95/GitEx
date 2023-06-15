import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLazyRoutingModule } from './user-lazy-routing.module';
import { UserLazyComponent } from './user-lazy.component';
import { LazyCompoComponent } from './lazy-compo/lazy-compo.component';


@NgModule({
  declarations: [
    UserLazyComponent,
    LazyCompoComponent
  ],
  imports: [
    CommonModule,
    UserLazyRoutingModule
  ]
})
export class UserLazyModule { }

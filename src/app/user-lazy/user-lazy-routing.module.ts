import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLazyComponent } from './user-lazy.component';
import { LazyCompoComponent } from './lazy-compo/lazy-compo.component';

const routes: Routes = [
  { path: '', component: UserLazyComponent },
  { path: 'lazyCompo', component: LazyCompoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLazyRoutingModule { }

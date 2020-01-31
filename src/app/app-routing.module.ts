import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'typing',
    loadChildren: () =>
      import('./typing/typing.module').then(m => m.TypingModule)
  },
  {
    path: 'password',
    loadChildren: () =>
      import('./password/password.module').then(m => m.PasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

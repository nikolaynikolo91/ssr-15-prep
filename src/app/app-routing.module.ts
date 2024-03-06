import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDinamicPageComponent } from './test-dinamic-page/test-dinamic-page.component';

const routes: Routes = [
  { path: 'test/:id', component: TestDinamicPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

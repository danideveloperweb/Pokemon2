import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { ViewCardComponent } from './component/view-card/view-card.component';

const routes: Routes = [
  { path: '', component: ViewCardComponent },
  { path: 'cardHijo', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

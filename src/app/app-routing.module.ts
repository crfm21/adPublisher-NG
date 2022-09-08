import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdCreateComponent } from './Components/AdCreation/ad-create/ad-create.component';
import { AdListViewComponent } from './Components/AdViewing/ad-list-view/ad-list-view.component';
import { AdViewComponent } from './Components/AdViewing/ad-view/ad-view.component';
import { HomeComponent } from './Components/Shared/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [{
      path: 'classificado/:id', component: AdViewComponent
    }]
  },
  { path: 'create/newAd', component: AdCreateComponent },
  {
    path: ':type', component: AdListViewComponent, children: [{
      path: ':id', component: AdViewComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

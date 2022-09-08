import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdCreateComponent } from './Components/AdCreation/ad-create/ad-create.component';
import { AdViewComponent } from './Components/AdViewing/ad-view/ad-view.component';
import { AdListViewComponent } from './Components/AdViewing/ad-list-view/ad-list-view.component';
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/Shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdCreateComponent,
    AdViewComponent,
    AdListViewComponent,
    NavBarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

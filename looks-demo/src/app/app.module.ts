import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LooksComponent } from './components/looks/looks.component';
import { LookItemComponent } from './components/look-item/look-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LooksComponent,
    LookItemComponent,
    CategoriesComponent,
    CategoryItemComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

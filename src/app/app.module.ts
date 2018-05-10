import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../api/products/product-list.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

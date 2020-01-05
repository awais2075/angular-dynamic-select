import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './product/product.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, CountryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountryService]
})
export class AppModule { }

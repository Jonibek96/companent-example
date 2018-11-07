import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import {stringifyElement} from "@angular/platform-browser/testing/src/browser_util";
import {ifTrue} from "codelyzer/util/function";
import {ngContentDef} from "@angular/core/src/view";
import {_ngDevMode} from "@angular/core/src/render3/ng_dev_mode";
import { DonishjuComponent } from './donishju/donishju.component';
import { AddCarComponent } from './add-car/add-car.component';




@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    CarsComponent,
    CarComponent,
    DonishjuComponent,
    AddCarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

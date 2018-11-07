import {Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange, ViewChild} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input('carItem') car: {name: string, year: number};
  @Input('name') name: string;
  @ContentChild ('carHeading') carHeading: ElementRef;
  constructor(){

  }

}

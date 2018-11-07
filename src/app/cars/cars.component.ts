import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
   cars: [{name: string, year: number}] = [{
     name: 'Ford',
     year: 2020
   },{
     name: 'Mazda',
     year: 2016
   }, {
     name: 'Lada',
     year: 2015
   },{
     name: 'BMW',
     year: 2014
   }
   ];

  updateCarList(car: {name: string, year: number}){
    this.cars.push(car);
  }

  changeCarName(){
    this.cars[0].name = 'new car';
  }

  deleteCar(){
    this.cars.pop();
  }


}

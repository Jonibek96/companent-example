import { Component, OnInit } from '@angular/core';
import { Donishju } from '../app.component';


@Component({
  selector: 'app-donishju',
  templateUrl: './donishju.component.html',
  styleUrls: ['./donishju.component.css']
})
export class DonishjuComponent  {

  students: Donishju[] = [];
  donName = '';
  donNas = '';
  donCours = '';
  donGur = '';
  addDonStatus = false;

  constructor(
  ) { }

  addDon() {
    this.students.push(new Donishju(this.donName, this.donNas, this.donCours, this.donGur ));
    this.addDonStatus = true;
    this.donName = '';
    this.donNas = '';
    this.donCours = '';
    this.donGur = '';

  }
  deleteInp(){
    this.donName = '';
    this.donNas = '';
    this.donCours = '';
    this.donGur = '';

  }

}

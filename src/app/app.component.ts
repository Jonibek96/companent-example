import {Component} from '@angular/core';
export class Donishju {
  constructor(
    public nom: string,
    public nasab: string,
    public cours: string,
    public guruh?: string
  ){
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


}

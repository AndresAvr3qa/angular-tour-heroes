import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from 'src/app/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;

  heroeSeleccionado?:Hero

  seleccionarHeroe(heroe:Hero){
    alert("SELECCIONANDO: " + heroe.name)
    this.heroeSeleccionado = heroe
  }

  mouseDownMethod():void{
    alert("mouse down")
  }

  mouseUpMethod():void{
    alert("mouse up")
  }
  mouseOverMethod():void{
    alert("over button")
  }
}

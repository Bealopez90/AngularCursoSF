import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
  
  labels1: string[]= ['Pepa', 'Pepe', 'Pepo'];
  colors1: string[]= ['#C52233', '#A7333F', '#580C1F'];
  data1: number[]= [200,300,500];

}


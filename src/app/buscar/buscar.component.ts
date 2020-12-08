import { GifsService } from './../gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor() { }

  name: string;

  ngOnInit(): void {
  }

  buscar(form) {
    location.href = `/resultado/${form.value.name}`;


  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.scss'],
})
export class ComponentesComponent implements OnInit {
  public actionSheetButtons = [
    {
      text: 'Borrar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor() {}

  ngOnInit() {}

}


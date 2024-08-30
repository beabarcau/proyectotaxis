import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ExampleComponent implements OnInit {
  items: { name: string; status: string; isDisabled: boolean }[] = [];
  names: string[] = ['Auto A', 'Auto B', 'Auto C', 'Auto D', 'Auto E', 'Auto F'];

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length;
    for (let i = 0; i < 50; i++) {
      const status = Math.random() > 0.5 ? 'Ocupado' : 'Libre'; // Genera aleatoriamente 'Ocupado' o 'Libre'
      const randomName = this.names[Math.floor(Math.random() * this.names.length)];
      this.items.push({
        name: randomName,
        status: status,
        isDisabled: status === 'Ocupado'
      });
    }
  }

  async onItemClick(item: { name: string; status: string }) {
    if (item.status === 'Libre') {
      const alert = await this.alertController.create({
        header: 'Seleccionar Auto',
        message: `¿Deseas seleccionar el auto ${item.name}?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Seleccionar',
            handler: () => {
              // Implementa la lógica para seleccionar el auto aquí
              console.log(`Auto ${item.name} seleccionado`);
            }
          }
        ]
      });

      await alert.present();
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }
  
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'refresh.component.html',
})
export class RefreshListComponent {
  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Carga o actualiza datos aquí
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
}

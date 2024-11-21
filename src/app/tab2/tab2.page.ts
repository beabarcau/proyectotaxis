import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router'; // Importa el servicio Router
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user = {} as User 

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    private router: Router // Inyecta el servicio Router
  ){}

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.getUser()
  }

  signOut(){
    this.firebaseSvc.signOut();
  }

  getUser(){
    return this.user = this.utilsSvc.getElementFromLocalStorage('user')
  }

  logout() {
    // Implementa la lógica de cierre de sesión aquí
    console.log("Usuario cerrado sesión.");
    this.firebaseSvc.signOut(); // Cierra la sesión en Firebase
    // Navega a la página de autenticación
    this.router.navigate(['/auth']).then(() => {
      setTimeout(() => {
        // Recarga la página después de un breve retardo
        location.reload();
      }, 1000); // Retardo de 1 segundo para asegurar la redirección completa
    });
  }
}

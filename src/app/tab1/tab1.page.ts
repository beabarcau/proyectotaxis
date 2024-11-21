import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  user = {} as User 

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    private router: Router
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
    console.log("Usuario cerrado sesión.");
    this.firebaseSvc.signOut();
    this.router.navigate(['../auth']);
  }
}

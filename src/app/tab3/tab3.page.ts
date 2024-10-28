import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  user = {} as User 

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
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
}


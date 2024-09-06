import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { getAuth, updateProfile, sendPasswordResetEmail } from "firebase/auth"
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private utilsSvc: UtilsService 

  ){}
  

  //----AUTENTICACION----

 
  login(user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  signup(user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  updateUser(user: any) {
    const auth = getAuth();
    return updateProfile(auth.currentUser, user)
  }

  getAuthState(){
    return getAuth();
  }


  async signOut(){
    await this.auth.signOut();
    this.utilsSvc.routerLink('/auth')
    localStorage.removeItem('user');
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(), email);
  }

}


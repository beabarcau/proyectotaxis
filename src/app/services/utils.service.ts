import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController
  ) { }

  //PRESENTACIONES

  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }

  //DISMISS 

  async dismissLoading(){
    return await this.loadingController.dismiss()
  }

  //Local

  //set
  setElementInLocalStorage(key: string, element: any){
    return localStorage.setItem(key, JSON.stringify(element))
  }

  //get
  getElementFromLocalStorage(key: string){
    return(JSON.parse(localStorage.getItem(key)))
  }
  
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }

}

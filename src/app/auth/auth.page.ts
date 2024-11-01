import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/utils/custom-validators';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
  }


  submit() {
    if (this.form.valid) {

      this.utilsSvc.presentLoading({ message: 'Ingresando...' })
      this.firebaseSvc.login(this.form.value as User).then(async res => {
        console.log(res);

        let user: User = {
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          rut: '',
          carrera: ''
        }
        this.utilsSvc.setElementInLocalStorage('user', user);

        this.utilsSvc.routerLink('/tab1')


        this.utilsSvc.dismissLoading();

        this.utilsSvc.presentToast({
          message: `Bienvenido ${user.name}`,
          duration: 1500,
          color: 'primary',
          icon: 'person-outline'
        })

        this.form.reset()
      }, error => {

        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message: error,
          duration: 5000,
          color: 'warning',
          icon: 'alert-circle-outline'
        })




      })
    }
  }


  getUserInfo(uid: string) {
    if (this.form.valid) {
      this.utilsSvc.presentLoading({ message: 'Registrando Usuario' });
      
      let path = `user/${uid}`;
  

      this.firebaseSvc.getDocument(path).then((user: User) => {

        this.utilsSvc.setElementInLocalStorage('user', user);
        this.utilsSvc.routerLink('/tab1');
        this.form.reset();
        
        this.utilsSvc.presentToast({
          message: `Bienvenido ${user.name}`,
          duration: 1500,
          color: 'primary',
          icon: 'person-outline'
        })

        error => {
        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message: error,
          duration: 5000,
          color: 'warning',
          icon: 'alert-circle-outline'
        });
      }});
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/utils/custom-validators';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
  }


  submit() {
    if (this.form.valid) {
      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(async res => {



        this.utilsSvc.presentToast({
          message: 'Correo enviado con éxito',
          duration: 1500,
          color: 'primary',
          icon: 'mail-outline'
        })

        this.utilsSvc.routerLink('/auth')
        this.form.reset

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

}

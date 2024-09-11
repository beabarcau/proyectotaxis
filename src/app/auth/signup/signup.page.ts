import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from 'src/app/utils/custom-validators';
import { FirebaseService } from '../../services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    rut: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{7,8}-[0-9kK]{1}$/)]),
    carrera: new FormControl('', [Validators.required])
  });

  constructor(
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.confirmPasswordValidator();
  }

  confirmPasswordValidator() {
    this.form.controls.confirmPassword.setValidators([
      Validators.required,
      customValidators.matchValues(this.form.controls.password)
    ]);

    this.form.controls.confirmPassword.updateValueAndValidity();
  }

  submit() {
    if (this.form.valid) {
      this.utilsSvc.presentLoading({ message: 'Registrando Usuario' });
      this.firebaseSvc.signup(this.form.value as User).then(async res => {
        console.log(res);

        await this.firebaseSvc.updateUser({ displayName: this.form.value.name });

        let user: User = {
          uid: res.user.uid,
          name: this.form.value.name,
          rut: this.form.value.rut,
          carrera: this.form.value.carrera,
          email: this.form.value.email
        };
        this.utilsSvc.setElementInLocalStorage('user', user);
        this.utilsSvc.routerLink('/tabs');

        this.utilsSvc.dismissLoading();

        this.utilsSvc.presentToast({
          message: `Bienvenido ${user.name}`,
          duration: 1500,
          color: 'primary',
          icon: 'person-outline'
        });

        this.form.reset();
      }, error => {
        this.utilsSvc.dismissLoading();
        this.utilsSvc.presentToast({
          message: error,
          duration: 5000,
          color: 'warning',
          icon: 'alert-circle-outline'
        });
      });
    }
  }
}

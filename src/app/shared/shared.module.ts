import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    CustomInputComponent,
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }

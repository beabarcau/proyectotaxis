import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComponentesComponent } from '../componentes/componentes.component'; 

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page,ComponentesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab3PageModule {}

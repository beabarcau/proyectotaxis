import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabsModule {}

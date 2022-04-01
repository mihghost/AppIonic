import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodCoresPageRoutingModule } from './cod-cores-routing.module';

import { CodCoresPage } from './cod-cores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodCoresPageRoutingModule
  ],
  declarations: [CodCoresPage]
})
export class CodCoresPageModule {}

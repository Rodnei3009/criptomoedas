import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoxbitPage } from './foxbit';

@NgModule({
  declarations: [
    FoxbitPage,
  ],
  imports: [
    IonicPageModule.forChild(FoxbitPage),
  ],
})
export class FoxbitPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UserPage } from './user.page';

import { UserPageRoutingModule } from './user-routing.module';
import { FinderComponent } from './finder/finder.component';
import { NewContractComponent } from './new-contract/new-contract.component';
import { PostModule } from '../client/post/post.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    PostModule,
  ],
  declarations: [
    UserPage,
    FinderComponent,
    NewContractComponent,
  ]
})
export class UserPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ClientPage } from './client.page';

import { ClientPageRoutingModule } from './client-routing.module';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostModule } from './post/post.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    PostModule,
  ],
  declarations: [
    ClientPage,
    PostsComponent,
    NewPostComponent,
  ]
})
export class ClientPageModule {}

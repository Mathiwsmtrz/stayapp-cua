import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    RouterModule,
    CommonModule
  ],
  declarations: [PostComponent],
  exports: [PostComponent]
})
export class PostModule { }

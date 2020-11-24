import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPage } from './client.page';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    data: {
      type: 0
    },
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule {}

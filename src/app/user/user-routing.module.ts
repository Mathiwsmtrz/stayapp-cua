import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../client/post/post.component';
import { FinderComponent } from './finder/finder.component';
import { NewContractComponent } from './new-contract/new-contract.component';
import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
  },
  {
    path: 'finder',
    component: FinderComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    data: {
      type: 1
    }
  },
  {
    path: 'new-contract',
    component: NewContractComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule {}

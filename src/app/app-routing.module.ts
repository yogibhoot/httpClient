import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './userdata/userdata.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  {
  path : 'Userdata',
  component : UserdataComponent
},
{
  path : 'userdetail/:id',
  component : UserdetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

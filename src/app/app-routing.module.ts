import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeammembersComponent } from './teammembers/teammembers.component';
import { AddnewteammemberComponent } from './addnewteammember/addnewteammember.component';
import { NumberofmatchesComponent } from './numberofmatches/numberofmatches.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'teammembers',component:TeammembersComponent
  },
  {
    path:'addnewteammember',component:AddnewteammemberComponent
  },
  {
    path:'numberofmatches',component:NumberofmatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

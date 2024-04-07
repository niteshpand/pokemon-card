import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtWorkComponent } from './art-work/art-work.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: ArtWorkComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

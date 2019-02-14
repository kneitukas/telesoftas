import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { UserListComponent } from '../user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './main/main.reducer';

const routes: Routes = [
  {path: '', component: MainComponent}
];

@NgModule({
  declarations: [
    UserListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('main', fromMain.reducer)
  ],
})

export class MainModule {}

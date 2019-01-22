import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
activeUser;
users;
  constructor(private store: StoreService) {
    this.users = this.store.users;
    this.activeUser = this.store.currentUser;
  }

  switchUser(name) {
    this.activeUser = name;
    this.store.logIn(name.username);
  }

}

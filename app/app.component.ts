import { Component , ViewChild} from '@angular/core';

import { User } from "./models/user";
import { UserService } from './user.service'

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls:  ['css/app.component.css',
               'css/bootstrap.css',
               'css/modal-window.css']
})
export class AppComponent {

  selectedUser: User;
  users: User[];

  constructor(private userService: UserService){}

  getHeroes() : void {
    this.userService.getUsers().then(users => this.users = users );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectUser(user: User){
    this.selectedUser = user;
  }

}

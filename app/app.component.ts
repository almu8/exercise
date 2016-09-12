import { Component , ViewChild} from '@angular/core';

import { User } from "./models/user";
import { UserService } from './user.service'

@Component({
  selector: 'my-app',
  templateUrl: "templates/app.component.html"
})
export class AppComponent {
  users: User[];

  constructor(private userService: UserService){}

  getHeroes() : void {
    this.userService.getUsers().then(users => this.users = users );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onClick(){
    alert("Users count - "+this.users.length);
  }

}

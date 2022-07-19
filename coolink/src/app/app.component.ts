import { Component } from '@angular/core';
import { IUsers } from './IUsers';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ApiRequest';

  constructor(private userService: UserService) {}

  showAllClients() {
    this.userService
      .getAll()
      .then((client) => console.log(client))
      .catch((error) => console.error(error));
  }

  getUserById() {
    this.userService
      .getById(6)
      .then((client) => console.log(client))
      .catch((error) => console.error(error));
  }

  addCar() {
    const clients: IUsers = {
      name: 'Takuma Sato',
      company: 'Honda',
    };

    this.userService
      .addUser(clients)
      .then((client) => console.log(`${client}  Added`))
      .catch((error) => console.error(error));
  }

  updateUser() {
    const clients: IUsers = {
      company: 'Toyota',
      name: 'Kagawa',
      id: 8,
    };

    this.userService
      .update(clients)
      .then((client) => console.log(`Updated ${client}`))
      .catch((error) => console.error(error));
  }

  remove() {
    this.userService
      .delete(9)
      .then((client) => console.log(`client removed`))
      .catch((error) => console.error(error));
  }
}

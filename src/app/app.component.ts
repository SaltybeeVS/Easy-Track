import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root', //Le dice a Angular que componentes tiene que buscar en el html para reemplazarlos por el template
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',// Este es el template que remplazara la marcacion.
  styleUrl: './app.component.css', //Es el estilo para la marca del componente, solo funcionara para el componente
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}

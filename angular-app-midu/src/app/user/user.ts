import { Component } from '@angular/core';
import { Games } from "../games/games";


@Component({
  selector: 'app-user',
  imports: [Games],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  username = "maraloedev"
  isLoggedIn = false;
  favGame = ''; 

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet(){
    alert("Hola!!!");
  }
}

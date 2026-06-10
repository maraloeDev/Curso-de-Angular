import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
 @Input() username = ""
 @Output() addfavoriteEvent = new EventEmitter<string>();

 fav(gameName: string){
    this.addfavoriteEvent.emit(gameName);
 }

  games = [
    { id: 1, name: 'Dark Souls I' },
    { id: 2, name: 'Dark Souls II' },
    { id: 3, name: 'Dark Souls III' },
  ];
}

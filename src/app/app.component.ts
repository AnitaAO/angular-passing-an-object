import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

interface onFavoriteChangedEventArgs{
  newValue: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 post = {
   title: "Title",
   isFavorite: true
 }

 onFavoriteChanged(eventArgs: onFavoriteChangedEventArgs){
   console.log("Favorite changed ", eventArgs);
 }
}

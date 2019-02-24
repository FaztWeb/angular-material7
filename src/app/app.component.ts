import { Component } from '@angular/core';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  albumsId = [1, 2, 3];

  constructor(private photosService: PhotosService) {

  }

  saveNewPhoto(title: HTMLInputElement, albumId: HTMLSelectElement, url: HTMLInputElement) {
    console.log(title.value, albumId.value, url.value)
    return false;
  }

}

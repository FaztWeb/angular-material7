import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/model/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(public photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(
        photos => {
          console.log(photos);
          this.photos = photos;
        } 
      )
  }

  something() { alert('Works!'); }

}

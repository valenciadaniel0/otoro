import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {

  constructor() { }

  @Input() url:string;  
  @Input() id:string;

  ngOnInit() {
    console.log(this.url);
  }

}

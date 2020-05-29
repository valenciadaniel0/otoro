import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-top-content]',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss'],
})
export class TopContentComponent implements OnInit {
  @Input() url:string;
  constructor() { }

  ngOnInit() {
    console.log(this.url);
  }

}

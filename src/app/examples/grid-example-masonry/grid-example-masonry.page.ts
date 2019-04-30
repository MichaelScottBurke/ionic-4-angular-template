import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-example-masonry',
  templateUrl: './grid-example-masonry.page.html',
  styleUrls: ['./grid-example-masonry.page.scss'],
})
export class GridExampleMasonryPage implements OnInit {
  images: any = [];

  constructor() { 

    this.images = [
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175',
      'http://placehold.it/175x175',
      'http://placehold.it/175x200',
      'http://placehold.it/150x300',
      'http://placehold.it/175x175'
    ]

  }

  ngOnInit() {
  }

}

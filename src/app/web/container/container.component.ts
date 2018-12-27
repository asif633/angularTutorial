import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  movie: any;
  actor: any;
  movies = [];
  actors = [];

  constructor() { }

  ngOnInit() {
  }

  getMovie(event) {
    this.movie = event;
    this.movies.push(this.movie);
    console.log('movie', event, this.movies);
  }
  
  getActor(event) {
    this.actors.push(event);
    this.actor = event;
    console.log('actor', event, this.actors);
  }



}

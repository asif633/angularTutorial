import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-first',
  templateUrl: './child-first.component.html',
  styleUrls: ['./child-first.component.scss']
})
export class ChildFirstComponent implements OnInit {
  @Output() movieEmit: EventEmitter<any> = new EventEmitter();
  @Input() actors = [];
  movies = [
    { name: 'ABCD', id: '1'},
    { name: 'BGTY', id: '2'},
    { name: 'JUYG', id: '3'},
    { name: 'HYUJ', id: '4'},
    { name: 'JYGF', id: '5'},
    { name: 'HGFF', id: '6'},
  ]
  constructor() { }

  outputMovie(movie) {
    this.movieEmit.emit(movie);
  }

  ngOnInit() {
    console.log('actors init', this.actors);
  }
  
  // ngAfterViewInit() {
  //   console.log('movies init', this.movies);
  // }
  
  ngOnChanges() {
    console.log('actors onchange', this.actors);
  }
  
  ngDoCheck() {
    console.log('actors docheck', this.actors);
  }
}

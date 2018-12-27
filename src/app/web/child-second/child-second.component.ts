import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.scss']
})
export class ChildSecondComponent implements OnInit {
  @Output() actorEmit: EventEmitter<any> = new EventEmitter();
  @Input() movies = [];

  actors = [
    { name: 'KJHG', id: '4'},
    { name: 'TYHHG', id: '3'},
    { name: 'VVVB', id: '1'},
    { name: 'HHHJJ', id: '2'},
    { name: 'HHH', id: '5'},
    { name: 'HHJH', id: '6'},
  ]
  constructor() { }

  ngOnInit() {
    console.log('movies init', this.movies);
  }
  
  // ngAfterViewInit() {
  //   console.log('movies init', this.movies);
  // }
  
  ngOnChanges() {
    console.log('movies onchange', this.movies);
  }

  outputMovie(actor) {
    this.actorEmit.emit(actor);
  }

  ngDoCheck() {
    console.log('movies docheck', this.movies);
  }
}

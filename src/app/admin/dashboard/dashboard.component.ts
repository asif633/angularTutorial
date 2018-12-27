import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://jsonplaceholder.typicode.com/posts`)
    .subscribe((res:any) => {
      console.log('result', res);
      this.cities = res;
    });
  }

}

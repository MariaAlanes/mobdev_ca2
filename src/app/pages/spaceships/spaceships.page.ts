import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.page.html',
  styleUrls: ['./spaceship.page.scss'],
})
export class SpaceshipPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/spaceship');
    this.films.subscribe(data => {
      console.log('my data: ', data);
    });
  }
}

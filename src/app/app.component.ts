import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'platzi-store';
  infos: any = [];
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.infos = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.infos = data;
    });
  }
}

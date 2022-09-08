import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  imo = 'imoveis';
  auto = 'automoveis';
  job = 'emprego';

  constructor() { }

  ngOnInit(): void {
  }

}

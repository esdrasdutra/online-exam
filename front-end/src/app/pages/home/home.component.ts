import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgSrc = "../../../assets/home_page.svg"
  imgAlt = "Home Page Image"

  ngOnInit(){}

}

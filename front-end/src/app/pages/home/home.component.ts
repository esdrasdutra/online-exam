import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/exam-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgSrc = "../../../assets/home_logo.svg";
  imgAlt = "Home Page Image";
  isHome = true;
  isInHome$!: Observable<boolean>;

  constructor(
    private homeService: HomeService,
    private router: Router
    ){}

  homeOut(){
    this.homeService.notHome()
    this.router.navigate(['exams']);
  }

  ngOnInit(){
    this.isInHome$ = this.homeService.isInHome;
    console.log(this.isInHome$)
  }
}

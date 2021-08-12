import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/exam-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isInHome$!: Observable<boolean>;

  constructor(private homeService: HomeService){}

  backHome(){
    this.homeService.inHome()
  }

  ngOnInit(){
    this.isInHome$ = this.homeService.isInHome;
  }
}

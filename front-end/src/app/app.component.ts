import { HomeService } from 'src/app/services/exam-api.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(private homeService: HomeService){}

  isInHome$!: Observable<boolean>;
  ngOnInit(){
    this.isInHome$ = this.homeService.isInHome;
    console.log(this.isInHome$)
  }
}

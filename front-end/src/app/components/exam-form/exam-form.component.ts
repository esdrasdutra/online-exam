import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
import { ExamsApiService } from 'src/app/services/exam-api.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss']
})
export class ExamFormComponent {

  exam = {
    title:'',
    description:'',
    long_description:''
  };

  profileJson: string = "";


  constructor(
    private examsApi: ExamsApiService,
    private router: Router,
    public auth: AuthService
    ) { }

  updateTitle(event: any) {
    this.exam.title = event.target.value;
  }

  updateDescription(event: any) {
    this.exam.description = event.target.value;
  }

  updateLongDescription(event: any) {
    this.exam.long_description = event.target.value;
  }

  saveExam() {
    this.examsApi
      .saveExam(this.exam)
      .subscribe(
        () => this.router.navigate(['/']),
        error => alert(error.message)
      );
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }
}

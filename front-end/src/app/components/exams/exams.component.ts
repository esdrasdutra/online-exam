import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/';
import { Exam } from './exam.model';
import { ExamsApiService } from '../../services/exam-api.service';

@Component({
  selector: 'exams',
  templateUrl:'./exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit, OnDestroy {
  examsListSubs!: Subscription;
  examsList!: Exam[];
  examSubs!: Subscription;
  exam!:Exam;

  constructor(
    private examsApi: ExamsApiService,
    private router: Router
    ) {}

  getExamById(id:number){
    this.examSubs = this.examsApi.getExamById(id).subscribe((res) => {
      this.exam = res;
      console.log(res)
    }, console.error);
    const self = this;
  }

  deleteExam(id:number){
    this.examsApi
    .deleteExam(id)
    .subscribe((_data) => {
      this.ngOnInit();
    })
  }


  ngOnInit() {
    this.examsListSubs = this.examsApi.getExams().subscribe((res) => {
      this.examsList = res;
    }, console.error);
    const self = this;
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
  }
}

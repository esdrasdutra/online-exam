import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/';
import { Exam } from './exam.model';
import { ExamsApiService } from '../../services/exam-api.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModal } from '../delete-modal/delete-modal';

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

  deleteExamModal = false;

  constructor(
    private examsApi: ExamsApiService,
    private dialog: MatDialog,
  ) {}

  getExamById(id:number){
    this.examSubs = this.examsApi.getExamById(id).subscribe((res) => {
      this.exam = res;
      console.log(res)
    }, console.error);
    const self = this;
  }


  deleteExam(id:number){
    const dialogRef = this.dialog.open(DeleteModal)

    dialogRef.afterClosed().subscribe((res) => {
      if (res == true){
        this.examsApi.deleteExam(id)
        .subscribe((_data) => {
          this.ngOnInit();
        })
      }
    }, console.error);
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

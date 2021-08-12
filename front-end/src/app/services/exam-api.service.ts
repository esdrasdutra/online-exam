import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment as env } from '../../environments/environment';
import { Exam, ExamDTO } from '../components/exams/exam.model';
import { HomeComponent } from '../pages/home/home.component';

@Injectable()
export class ExamsApiService {

  constructor(
    private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(`${env.dev.serverUrl}/exams`).pipe(
        catchError(ExamsApiService._handleError)
      );
  }

  getExamById(id: number):Observable<Exam>{
    return this.http
    .get<Exam>(`${env.dev.serverUrl}/exams/`+id).pipe(
      catchError(ExamsApiService._handleError)
    );
  }

  deleteExam(_id:number):Observable<Exam>{
    return this.http
    .delete<Exam>(`${env.dev.serverUrl}/exams/`+_id).pipe(
      catchError(ExamsApiService._handleError)
    );
  }

  saveExam(exam: ExamDTO): Observable<any> {
    return this.http
      .post(`${env.dev.serverUrl}/exams`, exam);
  }
}

export class HomeService {

  private homePage = new BehaviorSubject<boolean>(false); // {1}

  get isInHome(){
    return this.homePage.asObservable(); // {2}
  }

  constructor(){}

  inHome(){
    return this.homePage.next(false);
  }

  notHome(){
    return this.homePage.next(true);
  }
}

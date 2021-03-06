import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

import { API_URL } from '../env';
import { Exam } from './exam.model';

@Injectable()
export class ExamsApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(`${API_URL}/exams`).pipe(
        catchError(ExamsApiService._handleError)
      );
  }

  saveExam(exam: Exam): Observable<any> {
    return this.http
      .post(`${API_URL}/exams`, exam);
  }
}

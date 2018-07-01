import { Injectable } from '@angular/core';
import {Problem} from "../models/problem_model";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private problemSource = new BehaviorSubject<Problem[]>([]);
  constructor(private http:Http) { }

  getProblems(): Observable<Problem[]> {
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res:Response) => {
        this.problemSource.next(res.json());
      })
      .catch(this.handleError);

      return this.problemSource.asObservable();
  }

  getProblem(id:number): Promise<Problem> {
    return this.http.get(`api/v1/problem/${id}`)
                    .toPromise()
                    .then((res:Response) => res.json())
                    .catch(this.handleError);
  }


  addProblem(problem: Problem): Promise<Problem> {
  let headers = new Headers({ 'content-type': 'application/json' });
  return this.http.post('/api/v1/problems', problem, new RequestOptions({ headers: headers }))
                  .toPromise()
                  .then((res: Response) => {
                    this.getProblems();
                    return res.json();
                  })
                  .catch(this.handleError);
}
    // error hanlder
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.body || error);
  }
}

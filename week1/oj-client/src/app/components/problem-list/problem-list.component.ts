/**
 * Created by chris on 2018/6/26.
 */
import { Component, OnInit, Inject } from '@angular/core';
import {Problem} from "../../models/problem_model";
import {PROBLEMS} from "../../mock-problem";


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

 problems: Problem[];

  constructor(@Inject("data") private data){}
  ngOnInit() {
   this.getProblems();
  }

  getProblems():void {
    this.problems = this.data.getProblems();
  }



}

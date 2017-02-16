import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <p><b>Student: </b>Warren Sullivan</p>
  <p><b>Email: </b>wbs7@sbcglobal.net</p>
  <p><b>Performance</b></p>
  <table>
    <tr>
      <th>Points</th>
      <th>Points Possible</th>
      <th>Percent</th>
      <th>Grade</th>
    </tr>
    <tr>
      <th>{{TotalScoredPoints}}</th>
      <th>{{TotalPointsPossible}}</th>
      <th>{{TotalPercentGrade}}</th>
      <th>{{Grade}}</th>
    </tr>
  </table>

  <p><b>Add Assignment</b></p>

  <label>
    Assingment Name: 
    <input type="text" name="AssignmentName" (ngmodel)="AssignmentName">
    <p>
  </label>
  <label>
    Scored Points: 
    <input type="text" ng-model="ScoredPoints">
    <p>
  </label>
  <label>
    Points Possible: 
    <input type="text" ng-model="PointsPossible">
    <p>
  </label>
  <button (click)="addAssignment()">Add Assignment</button>

  <p><b>Assignments</b></p>
  <table>
    <tr>
      <th>Assignment Name</th>
      <th>Points Scored</th>
      <th>Points Possible</th>
      <th>Percent</th>
    </tr>
    <tr>
      <th>data</th>
      <th>data</th>
      <th>data</th>
      <th>data</th>
    </tr>
  </table>
  `,
})

export class AppComponent {
  Assignments: assignment[];

  TotalScoredPoints: number;
  TotalPointsPossible: number;
  TotalPercentGrade: number;
  Grade: string;

  constructor() {
    this.Assignments;

    this.TotalScoredPoints = 115;
    this.TotalPointsPossible = 120;
    this.TotalPercentGrade = this.TotalScoredPoints / this.TotalPointsPossible;
    this.Grade = this.calcGrade();
  }

  addAssignment():void {
    console.log();
  }

  calcGrade():string{
    if (this.TotalPercentGrade >= .9) { return "A" }
    if (this.TotalPercentGrade >= .8) { return "B" }
    if (this.TotalPercentGrade >= .7) { return "C" }
    if (this.TotalPercentGrade >= .6) { return "D" }
    return "F";
  }
}

interface assignment {
  assignment: string;
  scored: number;
  possible: number;
  percent: number;
}
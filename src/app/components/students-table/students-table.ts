import { Component, OnInit } from '@angular/core';
import { students } from './mock';
import { StudentTO } from '../../models/student.to';

@Component({
  selector: 'app-students-table',
  imports: [],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable implements OnInit {
  public students?: StudentTO[];

  ngOnInit(): void {
    this.students = students;
  }
}

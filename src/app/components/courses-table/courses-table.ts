import { Component, OnInit} from '@angular/core';
import { courses } from './mock';
import { CourseTO } from '../../models/course.to';

@Component({
  selector: 'app-courses-table',
  imports: [],
  templateUrl: './courses-table.html',
  styleUrl: './courses-table.css',
})
export class CoursesTable implements OnInit {

  public courses?: CourseTO[];

  ngOnInit(): void {
      this.courses = courses;
  }

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesTable } from "./components/courses-table/courses-table";
import { StudentsTable } from "./components/students-table/students-table";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesTable, StudentsTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('courses-list');

  courses: boolean = true;

  handleTableChange() {
    this.courses = !this.courses;
  }
}

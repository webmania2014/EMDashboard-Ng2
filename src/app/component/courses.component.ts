import { Component } from '@angular/core';
import { CourseService } from './service/course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>`
})
export class CourseComponent {
    title:string = "The title of courses page";
    courses:string[] = ['Course1', 'Course2', 'Course3'];

    constructor() {
    }
}
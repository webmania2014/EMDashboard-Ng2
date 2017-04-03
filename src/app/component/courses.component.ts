import { Component } from '@angular/core';
import { CourseService } from '../service/course.service';

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>`,
        providers: [CourseService]
})

export class CourseComponent {
    title:string = "The title of courses page";
    courses:string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
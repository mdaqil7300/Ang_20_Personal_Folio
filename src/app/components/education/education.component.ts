import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    institution: 'Dr D.Y.Patil College of Engineering',
    location: 'Pune'
  };
}

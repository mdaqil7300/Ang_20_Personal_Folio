import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  summary = `Frontend Developer with 4+ years of experience in building enterprise-level Angular applications focused on scalability, performance, and user experience. Skilled in Angular, TypeScript, JavaScript (ES6+), RxJS, NgRx, RESTful APIs, HTML5, CSS3, UI/UX optimization, responsive design, and cross-browser compatibility.`;

  expertise = [
    {
      icon: "code",
      title: "Enterprise Applications",
      description:
        "Experienced in building large-scale Angular applications with focus on architecture, scalability, and maintainability",
    },
    {
      icon: "zap",
      title: "Performance Optimization",
      description:
        "Expert in reducing load times through lazy loading, AOT compilation, and advanced Angular optimization techniques",
    },
    {
      icon: "layers",
      title: "State Management",
      description:
        "Proficient in NgRx and RxJS for managing complex application state and reactive data flows",
    },
    // {
    //   icon: 'users',
    //   title: 'Team Leadership',
    //   description: 'Trained and mentored 5+ developers, improving onboarding speed and overall team productivity'
    // }
  ];

  highlights = [
    "Migrated legacy ExtJS applications to modern Angular",
    "Reduced application load times in large-scale apps through advanced optimization",
    "Introduced NgRx state management in complex workflows, reducing bug frequency",
    "Recognized for best practices in Angular architecture",
  ];
}

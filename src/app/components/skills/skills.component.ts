import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Skill {
  name: string;
  level?: number;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      icon: "layout",
      skills: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "RxJS", level: 85 },
        { name: "NgRx", level: 85 },
        { name: "Angular Material", level: 80 },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      category: "Backend & APIs",
      icon: "server",
      skills: [{ name: "Node.js" }, { name: "RESTful APIs" }, { name: "JSON" }],
    },
    {
      category: "Tools & Platforms",
      icon: "tool",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Swagger" },
        { name: "SonarQube" },
        { name: "Docker" },
        { name: "Kubernetes" },
      ],
    },
    {
      category: "Methodologies & Practices",
      icon: "target",
      skills: [
        { name: "Agile (Scrum)" },
        { name: "CI/CD" },
        { name: "Test-Driven Development (TDD)" },
        { name: "Cross-Browser Compatibility" },
        { name: "State Management" },
        { name: "Performance Optimization" },
        { name: "Lazy Loading" },
      ],
    },
  ];
}

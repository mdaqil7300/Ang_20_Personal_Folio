import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Project {
  name: string;
  description: string;
  highlights: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
  achievements?: string[];
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "Accenture Solutions Pvt. Ltd",
      role: "Senior Analyst (Frontend Developer)",
      period: "Sep 2024 - Present",
      location: "India",
      projects: [
        {
          name: "UMR (Uncleared Margin Analytics) Application",
          description: "Angular web application using Nx monorepo structure",
          highlights: [
            "Implemented Original and Hypothetical workflows for Trades and CRIF data, with calculations support.",
            "Utilized NgRx for state management and AG Grid for large-scale, editable financial datasets.",
            "Integrated backend services with guarded initialization, session handling, file imports, and global error handling.",
          ],
        },
        {
          name: "Post-Trade Application",
          description: "Frontend migration from ExtJS to Angular",
          highlights: [
            "Migrated Post-Trade Application frontend while keeping Java/JSP backend intact",
            "Implemented Confirmation and Settlements modules with Angular components and NgRx",
            "Improved UI performance, maintainability, and scalability",
            "Used lazy loading, shared modules, and production builds for optimization",
          ],
        },
        {
          name: "Data Transformation Engine (DTE)",
          description:
            "Angular-based intranet platform streamlining daily workflows",
          highlights: [
            "Developed file upload, search, and client profile management features",
            "Designed admin dashboards for scheduling, tracking, and automated email alerts",
            "Improved data validation and distribution workflows with Angular + RxJS",
            "Enhanced transparency of payment processes and accuracy",
          ],
        },
      ],
    },
    {
      company: "Infosys Ltd",
      role: "Senior Systems Engineer (Frontend Developer)",
      period: "June 2021 - Sep 2024",
      location: "Pune",
      projects: [
        {
          name: "ActionTracker CommandCenter Dashboard",
          description: "Real-time monitoring dashboard for issue resolution",
          highlights: [
            "Led end-to-end development enabling teams to resolve issues faster",
            "Integrated REST APIs with RxJS streams for live updates and workflow automation",
            "Built reusable Angular components with modular architecture",
            "Improved operational efficiency and team collaboration",
          ],
        },
        {
          name: "Vulnerability Management System",
          description:
            "Centralized dashboard for tracking security vulnerabilities",
          highlights: [
            "Developed dashboard tracking vulnerabilities across all enterprise applications",
            "Automated assignment workflows and real-time vulnerability reporting",
            "Delivered real-time insights for executives supporting faster decision-making",
            "Designed UI/UX with cross-browser compatibility for multiple departments",
          ],
        },
      ],
      achievements: [
        "Reduced application load times in large-scale Angular apps through advanced optimization techniques",
        "Introduced NgRx state management in complex workflows, stabilizing apps and reducing bug frequency",
        "Trained and mentored 5+ developers, improving onboarding speed and team productivity",
        "Recognized for best practices in Angular architecture, enhancing scalability and reducing tech debt",
      ],
    },
  ];

  selectedExperience: Experience | null = null;

  ngOnInit() {
    this.selectedExperience = this.experiences[0];
  }

  selectExperience(experience: Experience) {
    this.selectedExperience = experience;
  }
}

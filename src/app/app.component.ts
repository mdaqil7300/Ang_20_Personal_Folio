import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Mohammad Aqil - Frontend Developer";
}

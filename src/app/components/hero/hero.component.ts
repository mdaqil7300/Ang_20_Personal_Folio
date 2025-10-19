import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  name = "Mohammad Aqil";
  title = "Senior Frontend Developer";
  phone = "+91-7892479388";
  email = "mdaqil7300@gmail.com";
  linkedin = "https://www.linkedin.com/in/md-aqil-300171191/";
  github = "https://github.com/mdaqil7300";

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  downloadResume(): void {
    try {
      const resumePath = `${environment.baseUrl}/assets/resume.pdf`;
      fetch(resumePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Resume file not found");
          }
          return response.blob();
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Mohammad_Aqil_Resume.pdf";
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error downloading resume:", error);
          alert("Unable to download resume. Please try again later.");
        });
    } catch (error) {
      console.error("Error in downloadResume:", error);
      alert("Unable to download resume. Please try again later.");
    }
  }
}

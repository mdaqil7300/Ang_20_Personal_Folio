import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  // Close mobile menu on resize > 768
  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    if ((event.target as Window).innerWidth > 768) {
      this.isOpen = false;
    }
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      this.close();
    } else {
      // fallback: navigate to anchor
      window.location.hash = sectionId;
      this.close();
    }
  }

  applyTheme(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    const theme = target?.value || "default";
    const root = document.documentElement;
    // Reset to default first
    root.style.setProperty(
      "--bg-gradient",
      "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    );
    root.style.setProperty("--section-bg", "#0f172a");
    root.style.setProperty("--text-color", "#e6eef8");
    root.style.setProperty("--muted-color", "#94a3b8");
    root.style.setProperty("--accent-start", "#3b82f6");
    root.style.setProperty("--accent-end", "#06b6d4");
    root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.04)");
    root.style.setProperty("--card-contrast", "rgba(255, 255, 255, 0.06)");
    root.style.setProperty("--label-text-color", "#e2e8f0");
    // Apply theme overrides
    if (theme === "dark") {
      root.style.setProperty(
        "--bg-gradient",
        "linear-gradient(135deg, #181818 0%, #232526 100%)"
      );
      root.style.setProperty("--section-bg", "#181818");
      root.style.setProperty("--text-color", "#e0e0e0");
      root.style.setProperty("--muted-color", "#b0b0b0");
      root.style.setProperty("--accent-start", "#6366f1");
      root.style.setProperty("--accent-end", "#06b6d4");
      root.style.setProperty("--card-bg", "rgba(40, 40, 40, 0.7)");
      root.style.setProperty("--card-contrast", "rgba(60, 60, 60, 0.1)");
      root.style.setProperty("--label-text-color", "#b0b0b0");
    } else if (theme === "light") {
      root.style.setProperty(
        "--bg-gradient",
        "linear-gradient(135deg, #f5f5f5 0%, #e0e7ef 100%)"
      );
      root.style.setProperty("--section-bg", "#f5f5f5");
      root.style.setProperty("--text-color", "#222");
      root.style.setProperty("--muted-color", "#64748b");
      root.style.setProperty("--accent-start", "#3b82f6");
      root.style.setProperty("--accent-end", "#06b6d4");
      root.style.setProperty("--card-bg", "rgba(255,255,255,0.9)");
      root.style.setProperty("--card-contrast", "rgba(0,0,0,0.03)");
      root.style.setProperty("--label-text-color", "#334155");
    } else if (theme === "forest") {
      root.style.setProperty(
        "--bg-gradient",
        "linear-gradient(135deg, #2d6a4f 0%, #40916c 100%)"
      );
      root.style.setProperty("--section-bg", "#2d6a4f");
      root.style.setProperty("--text-color", "#d8f3dc");
      root.style.setProperty("--muted-color", "#95d5b2");
      root.style.setProperty("--accent-start", "#52b788");
      root.style.setProperty("--accent-end", "#b7e4c7");
      root.style.setProperty("--card-bg", "rgba(45, 106, 79, 0.2)");
      root.style.setProperty("--card-contrast", "rgba(73, 160, 120, 0.1)");
      root.style.setProperty("--label-text-color", "#d8f3dc");
    } else if (theme === "sunset") {
      root.style.setProperty(
        "--bg-gradient",
        "linear-gradient(135deg, #ff6f61 0%, #ffb88c 100%)"
      );
      root.style.setProperty("--section-bg", "#ff6f61");
      root.style.setProperty("--text-color", "#fff3e2");
      root.style.setProperty("--muted-color", "#ffb88c");
      root.style.setProperty("--accent-start", "#ffb88c");
      root.style.setProperty("--accent-end", "#ff6f61");
      root.style.setProperty("--card-bg", "rgba(255, 111, 97, 0.2)");
      root.style.setProperty("--card-contrast", "rgba(255, 184, 140, 0.1)");
      root.style.setProperty("--label-text-color", "#fff3e2");
    }
  }
}

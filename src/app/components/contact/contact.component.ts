import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  contactInfo = [
    {
      icon: "phone",
      label: "Phone",
      value: "+91-7892479388",
      link: "tel:+917892479388",
    },
    {
      icon: "mail",
      label: "Email",
      value: "mdaqil7300@gmail.com",
      link: "mailto:mdaqil7300@gmail.com",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/mohammad-aqil-300171191/",
    },
  ];
}

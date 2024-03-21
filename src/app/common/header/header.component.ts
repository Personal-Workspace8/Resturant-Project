import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen: boolean = false;

  toggleNavigation(): void {
    this.isOpen = !this.isOpen;
  }
  closeSlideNavigation(): void {
    this.isOpen = false;
  }

  redirectToWhatsApp(): void {
    // const phoneNumber = '01416111766'; // Replace with the phone number
    // const whatsappLink = `https://wa.me/${phoneNumber}`;
    // window.location.href = whatsappLink;

    const phoneNumber = '+01416111766'; // Replace with the phone number, including the country code
    const whatsappLink = `https://wa.me/${encodeURIComponent(phoneNumber)}`;
    window.location.href = whatsappLink;
  }
}

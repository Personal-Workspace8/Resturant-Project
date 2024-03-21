import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailService } from 'src/app/common/services/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  openingHours = [
    { day: 'Tue', hours: '10:00  - 9:00 ' },
    { day: 'Wed', hours: '10:00  - 9:00 ' },
    { day: 'Th', hours: '10:00  - 9:00 ' },
    { day: 'Fri', hours: '10:00  - 10:00 ' },
    { day: 'Sat', hours: '10:00  - 10:00 ' },
    { day: 'Sun', hours: '10:00  - 10:00 ' }
  ];

  // Track the visibility of the dropdown content
  isDropdownOpen = false;
  sending: boolean = false;

  constructor(private _fb: FormBuilder, private _emailService: EmailService) {
    this.contactForm = this._fb.group({
      from_name: [''],
      message: [''],
      email: [''],
      phone: ['']
    })
  }


  // Function to toggle the visibility of the dropdown content
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }



  send(data: any) {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.sending = true;
    // this.sending.next(true)
    const res = this._emailService.sendEmail(data);
    this.contactForm.reset();
    if (res) {
      // this.sending.next(false)
      this.sending = false;

    }
  }

  redirectToGmail(): void {
    const recipientEmail = 'clearbusinessbyadrian@gmail.com'; // Replace with the recipient's email address
    window.location.href = `mailto:${recipientEmail}`;
  }
}

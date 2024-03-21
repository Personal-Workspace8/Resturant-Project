import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { EmailService } from 'src/app/common/services/email.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // sending = new BehaviorSubject<boolean>(false);
  sending = false;
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

  constructor(private _fb: FormBuilder, private _emailService: EmailService) {
    this.contactForm = this._fb.group({
      from_name: [''],
      message: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
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
}

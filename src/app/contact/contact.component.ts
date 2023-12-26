// src/app/contact/contact.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    // Add your contact form submission logic here
    console.log('Contact form submitted:', this.name, this.email, this.message);
  }
}

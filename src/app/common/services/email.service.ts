import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _toastr: ToastrService) { }

  sendEmail(data: any): any {
    emailjs.init('V9R0OOcnJQrh437HP');
    const res = emailjs.send("service_k64qwhd", "template_se7m2jq", {
      from_name: data.from_name,
      message: data.message,
      email: data.email,
      phone: data.phone,
    });
    this._toastr.success('Form Submitted Successfully !!');
    return resizeBy;
  }
}

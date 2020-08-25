import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: any;
  loggedIn = false;
  loggedInUserPhoto;
  loggedInUserName;

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService) {
    this.contactForm = this.formBuilder.group({
      userName: '',
      userEmail: '',
      userComment: ''
    });
    // this.auth.user$.subscribe((user) => {
    //   console.log(user);
    //   if (user === null) {
    //     this.loggedIn = false;
    //   } else {
    //     this.loggedIn = true;
    //     this.loggedInUserPhoto = user.photoURL;
    //     this.loggedInUserName = user.displayName;
    //     this.contactForm.controls.userName.setValue(user.displayName);
    //     this.contactForm.controls.userEmail.setValue(user.email);
    //   }
    // });
  }

  onSubmit(contactData) {
    console.warn('Your order has been submitted', contactData);
    // this.dbService.insertUserComment(contactData);
    this.contactForm.controls.userComment.setValue();
    this.toastr.success('Response Saved Successfully', 'Notification :');
  }

}

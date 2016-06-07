import {Component} from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { SubscriptionComponent } from './email-subscription.component';
import { SignUpComponent } from './signup-form.component';
@Component({
    selector: 'my-app',
    template: `<div *ngIf="showcontactForm">
                <contact-form></contact-form>
               <Subscription></Subscription>
               </div>
               <signup></signup>
    `,
    directives: [ContactFormComponent, SubscriptionComponent, SignUpComponent]
})
export class AppComponent {
    showcontactForm = false;
 }
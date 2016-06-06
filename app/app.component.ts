import {Component} from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { SubscriptionComponent } from './email-subscription.component';
@Component({
    selector: 'my-app',
    template: `<div *ngIf="showcontactForm">
                <contact-form></contact-form>
               </div>
               <Subscription></Subscription>
               test
    `,
    directives: [ContactFormComponent, SubscriptionComponent]
})
export class AppComponent {
    showcontactForm = false;
 }
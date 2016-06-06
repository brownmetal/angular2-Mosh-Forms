import { Component } from '@angular/core';

@Component({
    selector: 'Subscription',
    templateUrl: 'app/email-subscription.component.html'
})
export class SubscriptionComponent {
    frequencies=[
        {id:1, item:"Daily"},
        {id:2, item:"Weekly"},
        {id:3, item:"Monthly"}
    ]
}
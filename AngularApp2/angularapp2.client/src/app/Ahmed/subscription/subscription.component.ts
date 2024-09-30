import { Component } from '@angular/core';
import { UrlService } from '../Url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  SubServiceIddddd:any

  ngOnInit() {
    this.SubServiceIddddd = this._route.snapshot.paramMap.get("id");

    this.getMalik();
  }
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }

  subscriptionArray: any

  getMalik() {
    this._ser.getSubscriptionData().subscribe((data) => {
      this.subscriptionArray = data
      console.log(data);
    })
  }

  data = {
    "userId": 1,
    "subscriptionId": 0,
    "subServiceId": 0
  }

  addUserSubscription(id:any) {
    this.data.subscriptionId = id;
    this.data.subServiceId = this.SubServiceIddddd;

    debugger
    this._ser.addUserSubscription(this.data).subscribe(() => {
      alert("user subscription Added Succefully")
    })
  }
}

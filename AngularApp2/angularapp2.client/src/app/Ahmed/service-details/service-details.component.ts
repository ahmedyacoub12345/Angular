import { Component } from '@angular/core';
import { UrlService } from '../Url/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {

  subserviceId: any
  ngOnInit() {
    this.subserviceId = this._route.snapshot.paramMap.get("id");

    this.getDtatails(this.subserviceId)
  }
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }

  subservicedetails: any

  getDtatails(id:number) {
    this._ser.serviceDetails(id).subscribe((data) => {
      this.subservicedetails = data;
      console.log(data)
    })
  }


}

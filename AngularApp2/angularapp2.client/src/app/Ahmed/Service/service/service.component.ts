import { Component } from '@angular/core';
import { UrlService } from '../../Url/url.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})

export class ServiceComponent {
  ngOnInit() {

    this.getServices();
  }
  constructor(private _ser: UrlService) {


  }

  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")
    })

  }
}


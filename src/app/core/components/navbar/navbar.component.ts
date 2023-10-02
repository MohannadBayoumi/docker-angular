import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  apiResponse: any;
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.CallDefaultAPI();
  }

  CallDefaultAPI() {
    // this.httpClient.get("backend/WeatherForecast/")
    //                     .subscribe(response => this.apiResponse = response);
  }
}


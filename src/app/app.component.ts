import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Register';
  url = 'https://api.mesosfer.com/api/v2/users';
  userlist = '';

  constructor(private http: HttpClient) {} 
  
  getUser() {
  	this.http.get(this.url, {
  	  headers: {
		"Content-Type": "application/json",
		"X-Mesosfer-AppId": "tzVOewKnss",
		"X-Mesosfer-AppKey": "ACNRwDdYOzGekYkDPbd1ffNpEPH0nr8J"
	  }}).subscribe(
   		(data) => {
          this.userlist = data['results'];
      	}
      );
  }

  ngOnInit() {
  	this.getUser();
  }

  regUser(regFirst: string, regLast: string, regMail: string, regPass: string) {
  	let testData = {firstname: regFirst, lastname: regLast, email: regMail, password: regPass};
  	this.http.post(this.url, 
  	  JSON.stringify(testData), {
  	  headers: {
		"Content-Type": "application/json",
		"X-Mesosfer-AppId": "tzVOewKnss",
		"X-Mesosfer-AppKey": "ACNRwDdYOzGekYkDPbd1ffNpEPH0nr8J"
	  }}).subscribe(
   		(data: Response) => {
      	  this.getUser();
      	}
      );
  }

}
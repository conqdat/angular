import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myAngularxQrCode: string;
  public qrCodeDownloadLink: SafeUrl = "";
  
  constructor () {
    this.myAngularxQrCode = 'http://localhost:4200/';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = 'http://localhost:4200/user';
  }
}

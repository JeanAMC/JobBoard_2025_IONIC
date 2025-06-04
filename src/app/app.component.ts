import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import {  HostListener } from '@angular/core';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}

  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorageOnClose(event: Event) {
    localStorage.removeItem('authToken');
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {   IonContent,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonLabel,
  IonToolbar, } from '@ionic/angular/standalone';
  import { addIcons } from 'ionicons';
  import { home, navigate, compass, briefcase, notifications, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonLabel, IonToolbar]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({ home, navigate, compass, briefcase, notifications, person });

  }

  ngOnInit() {
  }

}


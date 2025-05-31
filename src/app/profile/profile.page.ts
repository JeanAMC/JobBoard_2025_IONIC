import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pencilOutline} from 'ionicons/icons';
import { arrowForwardOutline } from 'ionicons/icons';
import { cameraOutline } from 'ionicons/icons';

addIcons({
  'camera-outline': cameraOutline
});
addIcons({
  'arrow-forward-outline': arrowForwardOutline
});

addIcons({
  'pencil-outline': pencilOutline
});
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonCardTitle 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonIcon,
    IonButton,
    IonCardTitle, 
  ],
})
export class PerfilPage implements OnInit {

  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
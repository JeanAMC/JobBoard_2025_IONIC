import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonAvatar, IonContent, IonIcon, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';

addIcons({
  'ellipsis-horizontal': ellipsisHorizontal,
});

interface Vacancy {
  title: string;
  companyName: string;
  companyAvatar: string;
  timeAgo: string;
  description: string;
}

@Component({
  selector: 'app-vacantes',
  templateUrl: './vacante.page.html', 
  styleUrls: ['./vacante.page.scss'], 
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonAvatar,
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonButton,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VacantesPage implements OnInit {
  vacancies: Vacancy[] = [
    {
      title: 'Administrador de base de datos',
      companyName: 'Granite Plus',
      companyAvatar: 'https://placehold.co/150x150/4a90e2/ffffff?text=GP',
      timeAgo: '8 hrs ago',
      description: 'Se requiere administrador para administrar xd.',
    },
    {
      title: 'Administrador de base de datos',
      companyName: 'Granite Plus',
      companyAvatar: 'https://placehold.co/150x150/4a90e2/ffffff?text=GP',
      timeAgo: '8 hrs ago',
      description: 'Se requiere administrador para administrar xd.',
    },
    
  ];

  constructor(private router: Router) {}

postular() {
  this.router.navigate(['/postulacion']);
}

  ngOnInit() {}
}
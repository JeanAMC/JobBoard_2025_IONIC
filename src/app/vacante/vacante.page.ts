import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
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
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';

import { VacanteInfoComponent } from '../components/vacante-info/vacante-info.component';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastController, ModalController } from '@ionic/angular';

addIcons({
  'ellipsis-horizontal': ellipsisHorizontal,
});

export interface Vacancy {
  id: number;
  Titulo: string;
  Descripcion: string;
  Compania: string;
  Localizacion: string;
  Salario?: number;
  Fecha_Publicacion: Date;
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
  providers: [ModalController],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VacantesPage implements OnInit {
  constructor(
    private router: Router,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.obtenerVacantes();
  }

  busqueda: string = '';
  vacancies: Vacancy[] = [];

obtenerValor(event: any): void {
  const valor = event.target.value;
  console.log('Valor de búsqueda:', valor);
  this.busqueda = valor;
  this.obtenerVacantes();
}

  obtenerVacantes(): void {
    const token = '5|KdW9toiyLZRWgxYxC2wT0KGzkkGELbXUvfKNHmnE9f9fdff7';
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
console.log('Texto de búsqueda:', this.busqueda);
    let params = new HttpParams();
    if (this.busqueda.trim()) {
      params = params.set('titulo', this.busqueda.trim());
    }

    this.http
      .get<{ vacantes: Vacancy[] }>('http://127.0.0.1:8000/api/Vacantes/buscar', {
        headers,
        params,
      })
      .subscribe({
        next: (res) => {
          this.vacancies = res.vacantes;
        },
        error: async (err) => {
          console.error('Error al buscar vacantes:', err);
          const toast = await this.toastController.create({
            message: 'No se encontraron vacantes.',
            duration: 3000,
            color: 'warning',
          });
          toast.present();
        },
      });
  }

  async mostrarDetalles(vacancy: any) {
    const modal = await this.modalCtrl.create({
      component: VacanteInfoComponent,
      componentProps: {
        vacancy: vacancy,
      },
    });
    await modal.present();
  }

  postular() {
    this.router.navigate(['/postulacion']);
  }
}

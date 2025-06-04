import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { VacantesService } from '../service/vacantes.service';
import { ToastController } from '@ionic/angular';
import {
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonIcon,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-vacante',
  templateUrl: './agregar-vacante.page.html',
  styleUrls: ['./agregar-vacante.page.scss'],
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
      IonItem,
   IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  ],
})
export class AgregarVacantePage {
  vacante = {
    Titulo: '',
    Descripcion: '',
    Compania: '',
    Localizacion: '',
    Salario: null as number | null,
    Tipo_Contrato: 'full_time',
    Nivel_Experiencia: '',
    Habilidades: '',
    Fecha_Publicacion: '',
    Expiracion: '',
    Estado_vacante: 'activo'
  };

  constructor(
    private vacantesService: VacantesService,
    private toastController: ToastController
  ) {}

agregarVacante() {
  console.log('Datos enviados a la API:', this.vacante);
  console.log('Datos que se enviarán a la API:', JSON.stringify(this.vacante, null, 2));
console.log(localStorage.getItem('authToken') ?? '');

this.vacante.Fecha_Publicacion = this.vacante.Fecha_Publicacion?.split('T')[0];
this.vacante.Expiracion = this.vacante.Expiracion?.split('T')[0];

  this.vacantesService.crearVacante(this.vacante).subscribe({
    next: async (res) => {
      const toast = await this.toastController.create({
        message: 'Vacante agregada correctamente.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    },
    error: async (err) => {
      console.error('Error al agregar vacante:', err);
      const toast = await this.toastController.create({
        message: 'Error al agregar vacante.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  });
}



}

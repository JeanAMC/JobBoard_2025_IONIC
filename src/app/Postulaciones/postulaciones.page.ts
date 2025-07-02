import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { Location } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-detalle-vacante',
  templateUrl: './postulaciones.page.html',
  styleUrls: ['./postulaciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonText
  ],
})
export class PostulacionPage implements OnInit {
  vacante: any;
  postulacion = {
    codigoPais: '+506',
    numeroTelefono: '',
    telefono: '',
    curriculum: null as File | null,
    curriculumNombre: ''
  };
  vacanteId: string | null = null;

  user: User | null | undefined = null;
  isLoading: boolean = false;

  private apiUrl = environment.apiUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private location: Location,
    private http: HttpClient,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.vacanteId = this.route.snapshot.paramMap.get('id');
    this.vacante = {
      id: this.vacanteId,
      titulo: 'Técnico en reparación preventiva de computadoras',
      empresa: 'Tech Solutions S.A.',
      ubicacion: 'San José, Costa Rica',
      descripcion: 'Se busca técnico con experiencia en mantenimiento y reparación de equipos informáticos. Conocimientos en hardware, software y redes son requeridos.'
    };

    this.loadUserData();

  }

  async loadUserData() {
    try {
      this.user = await this.http.get<User>(`${this.apiUrl}/user`).toPromise();
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
      this.presentToast('Error al cargar la información del usuario.', 'danger');
    }
  }
  
  selectFile() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      this.postulacion.curriculum = file;
      this.postulacion.curriculumNombre = file.name;
    } else {
      this.postulacion.curriculum = null;
      this.postulacion.curriculumNombre = '';
    }
  }

  async enviarPostulacion() {
    if (!this.postulacion.curriculum) {
      this.presentToast('Debes adjuntar tu currículum antes de postularte.', 'warning');
      return;
    }
    if (!this.postulacion.codigoPais || !this.postulacion.numeroTelefono) {
      this.presentToast('Por favor, completa el código de país y el número telefónico.', 'warning');
      return;
    }
    if (!this.vacanteId) {
      this.presentToast('No se pudo determinar la vacante a la que postularse.', 'danger');
      return;
    }

    this.isLoading = true;

    this.postulacion.telefono = this.postulacion.codigoPais + this.postulacion.numeroTelefono;

    const formData = new FormData();
    formData.append('vacantetrabajo_id', this.vacanteId);
    formData.append('telefono', this.postulacion.telefono);
    if (this.postulacion.curriculum) {
      formData.append('curriculum_vitae', this.postulacion.curriculum, this.postulacion.curriculum.name);
    }

    try {
      const response = await this.http.post(`${this.apiUrl}/postulaciones`, formData).toPromise();
      console.log('Postulación enviada exitosamente:', response);
      this.presentToast('¡Postulación enviada con éxito!', 'success');
      this.router.navigateByUrl('/main/tabs/vacantes');
    } catch (error: any) {
      console.error('Error al enviar postulación:', error);
      let errorMessage = 'Error al enviar la postulación. Inténtalo de nuevo.';
      if (error.error && error.error.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      this.presentToast(errorMessage, 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  goBack() {
    this.location.back();
  }
}
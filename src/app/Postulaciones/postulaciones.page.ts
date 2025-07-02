import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
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
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.presentToast('No se encontró token de autenticación.', 'warning');
      return;
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.user = await firstValueFrom(
      this.http.get<User>(`${this.apiUrl}/user`, { headers })
    );
  } catch (error) {
    console.error('Error al cargar datos del usuario:', error);
    this.presentToast('Error al cargar la información del usuario.', 'danger');
  }
}

  
  selectFile() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
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
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    const response = await firstValueFrom(
      this.http.post(`${this.apiUrl}/postulaciones`, formData, { headers })
    );

    console.log('Postulación enviada exitosamente:', response);
    this.presentToast('¡Postulación enviada con éxito!', 'success');
    this.router.navigateByUrl('/vacante');
  } catch (error: any) {
    console.error('Error al enviar postulación:', error);
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
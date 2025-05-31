import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
    nombreCompleto: '', 
    email: '',
    codigoPais: '', 
    telefono: '',
    curriculum: null as File | null,
    curriculumNombre: ''
  };
  vacanteId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private location: Location
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
  }

  // Método para activar el input de tipo file oculto
  selectFile() {
    document.getElementById('fileInput')?.click();
  }

  // Método para manejar la selección del archivo
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.postulacion.curriculum = file;
      this.postulacion.curriculumNombre = file.name;
      console.log('Archivo seleccionado:', file.name);
    }
  }

  enviarPostulacion() {
    // IMPORTANTE: NO USAR alert() en producción en Ionic. Usa un modal o toast.
    if (!this.postulacion.curriculum) {
      // Reemplazar alert con un modal o toast de Ionic
      console.log('Debes adjuntar tu currículum antes de postularte.');
      return;
    }
    // Lógica para enviar la postulación (ahora incluye nombreCompleto)
    console.log('Enviar postulación:', this.postulacion);
    // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
  }

  goBack() {
    this.location.back();
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  IonFab, 
  IonFabButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-postulaciones-muestra',
  templateUrl: './postulaciones-muestra.page.html',
  styleUrls: ['./postulaciones-muestra.page.scss'],  
  imports: [
    IonHeader,
    CommonModule,
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
    IonFab,
    IonFabButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
  ]
})
export class PostulacionesMuestraPage implements OnInit {
  vacanteId: number | null = null;
  postulaciones: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.vacanteId = Number(this.route.snapshot.paramMap.get('vacanteId'));
    this.obtenerPostulaciones();
  }

  obtenerPostulaciones() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    this.http
      .get<{ postulaciones: any[] }>('http://127.0.0.1:8000/api/obtenerpostulaciones', { headers })
      .subscribe({
        next: (res) => {

          this.postulaciones = res.postulaciones.filter(
            (p) => p.vacante.id === this.vacanteId
          );
        },
        error: (err) => {
          console.error('Error obteniendo postulaciones', err);
        },
      });
  }

cambiarEstado(postulacionId: number, nuevoEstado: string) {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

  this.http
    .post(`http://127.0.0.1:8000/api/postulaciones/${postulacionId}/status`, {
      estado: nuevoEstado,
      mensaje: `Su postulación fue ${nuevoEstado}`  
    }, { headers })
    .subscribe({
      next: () => {
        this.obtenerPostulaciones();
      },
      error: (err) => {
        console.error('Error cambiando estado', err);
      },
    });
}


}

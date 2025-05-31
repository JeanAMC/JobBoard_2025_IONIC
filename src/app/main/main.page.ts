import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonItem, IonLabel, IonList} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

addIcons({
  'chevron-forward-outline': chevronForwardOutline
});



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonItem, IonLabel, IonList,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})

export class MainPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }
  private http = inject(HttpClient);
  mensaje: string = '';

  ngOnInit() {

  this.http.get<{ mensaje: string }>('http://127.0.0.1:8000/api/ejemplo').subscribe({
    next: res => {
      console.log(res.mensaje); //Genera un  mensaje en la consola
      this.mensaje = res.mensaje;
    },
    error: err => {
      console.error(err);
    }
  });
  
  }

  posts = [
    {
      userName: 'Carlos García',
      userAvatar: 'assets/images/avatar1.png',
      content: '¡Hola! Estoy buscando un diseñador web.'
    },
    {
      userName: 'Lucía Pérez',
      userAvatar: 'assets/images/avatar2.png',
      content: 'Se busca programador freelance para app móvil.'
    },
    {
      userName: 'Marcos Ríos',
      userAvatar: 'assets/images/avatar3.png',
      content: 'Ofrezco servicios de traducción español-inglés.'
    },
    {
      userName: 'Ana Torres',
      userAvatar: 'assets/images/avatar4.png',
      content: '¿Alguien interesado en clases de piano online?'
    }
  ];
  
  searchText = '';
  items = ['Manzana', 'Banana', 'Cereza', 'Damasco'];
  resultados = [...this.items];
  isFocused= false;
  searchQuery='';

  buscar(event: any) {
    const texto = event.target.value.toLowerCase();
    this.resultados = this.items.filter(item => 
      item.toLowerCase().includes(texto)
    );
  }

goToCategorias() {
  this.router.navigate(['/categorias']);
}

}


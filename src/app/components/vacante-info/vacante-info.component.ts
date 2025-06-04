import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonItem, IonLabel, IonList} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-vacante-info',
  templateUrl: './vacante-info.component.html',
  styleUrls: ['./vacante-info.component.scss'],
    standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonItem, IonLabel, IonList,CommonModule,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VacanteInfoComponent {
  @Input() vacancy: any;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}

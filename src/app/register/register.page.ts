import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario si vas a usar [(ngModel)]
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // Añade FormsModule
})
export class RegisterPage implements OnInit {

  // Opcional: variables para [(ngModel)]
  // registerData = {
  //   fullName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  register() {
    // console.log('Datos de registro:', this.registerData); // Si usas ngModel

    // Aquí iría la lógica de validación y registro del usuario
    // Por ejemplo, verificar que las contraseñas coincidan:
    // if (this.registerData.password !== this.registerData.confirmPassword) {
    //   console.error('Las contraseñas no coinciden');
    //   // Mostrar alerta al usuario
    //   return;
    // }

    console.log('Botón Crear Cuenta presionado');
    // Lógica para enviar datos al backend, etc.

    // Ejemplo de navegación después de un registro exitoso:
    // this.navCtrl.navigateRoot('/login'); // O a una página de bienvenida/dashboard
  }

  navigateToLogin() {
    this.navCtrl.navigateBack('/login'); // O navigateForward, según tu flujo
  }

}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  // Opcional: puedes añadir propiedades para vincular con los inputs si usas ngModel
  // email = '';
  // password = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login() { // Renombrado desde continueWithEmail
    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    console.log('Botón Continuar (Login) presionado');
    // Lógica de inicio de sesión
    // this.navCtrl.navigateForward('/tabs/home'); // Ejemplo de navegación post-login
  }

  continueWithGoogle() {
    console.log('Continuar con Google presionado');
    // Lógica de inicio de sesión con Google
  }

  continueWithApple() {
    console.log('Continuar con Apple presionado');
    // Lógica de inicio de sesión con Apple
  }

  // Nuevo método para el botón de registrarse
  navigateToRegister() {
    console.log('Botón Registrarse presionado');
    // Navegar a la página de registro
    this.navCtrl.navigateForward('/register'); // Asegúrate de que la ruta '/register' exista
  }

}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  password: any;
  email: any;


  constructor(private navCtrl: NavController, private http: HttpClient,  private router: Router,) {

    
   }

  ngOnInit() {
  }

login() {
  const loginData = {
    email: this.email,
    password: this.password,
  };
  console.log('Valor de búsqueda:', loginData.email);
    console.log('Valor de búsqueda:', loginData.password);

  this.http.post<any>('http://127.0.0.1:8000/api/login', loginData).subscribe({
    next: (res) => {
      if (res.token && res.user) {

        localStorage.setItem('authToken', res.token);
        localStorage.setItem('authUser', JSON.stringify(res.user));

        this.router.navigate(['/main']);
      } else {
        console.error('Respuesta inválida del servidor', res);
      }
    },
    error: (err) => {
      console.error('Error al iniciar sesión:', err);

    }
  });
}


  continueWithGoogle() {
    console.log('Continuar con Google presionado');

  }

  continueWithApple() {
    console.log('Continuar con Apple presionado');
  }


  navigateToRegister() {
    console.log('Botón Registrarse presionado');

    this.navCtrl.navigateForward('/register');
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {
  showLoginForm = true; // Affiche le formulaire de connexion par défaut

  user = {
    email: '',
    password: '',
    confirmPassword :''
  };

  public submitForm() {
    // Récupérez les valeurs des champs de formulaire depuis this.user
    const email = this.user.email;
    const password = this.user.password;

    // Envoyez les données au backend (vous pouvez utiliser HttpClient pour cela)
    // ...
    alert(email)
  }
}

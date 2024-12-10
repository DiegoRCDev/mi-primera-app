import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormsModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Ingeniero';
  titulo1 = '';
  mostrar = false;

  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada!';
  }

  modificarTitulo(event: Event) {
    //Recupera el valor del elemento html sin usar FormsModule en app ts
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}

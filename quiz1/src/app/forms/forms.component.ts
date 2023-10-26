import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],

  //agregar para angular material
  standalone: true,
  imports: [FormsModule],
})
export class FormsComponent {
  //componete de datos
  //atributos
  userData={
    name:'',
    lastname:'',
    email:'',
  };

  //metodos
  showfORM=true;
  onSubmit(){
    console.log(this.userData);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = 'app1';

  cursos = ['JS', 'C#']

  addCurso(nombres:String){
    this.cursos.push(String(nombres))
  }
}

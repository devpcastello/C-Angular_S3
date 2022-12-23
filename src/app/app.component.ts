import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  cursos = ['JS', 'C#']

  addCurso(nombres:String){
    this.cursos.push(String(nombres))
  }
}

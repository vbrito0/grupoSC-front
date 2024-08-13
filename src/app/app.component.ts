import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteManageComponent } from '../app/cliente-manage/cliente-manage.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClienteManageComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-pratico-front';
}

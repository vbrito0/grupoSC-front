import { Routes } from '@angular/router';
import { ClienteManageComponent } from '../app/cliente-manage/cliente-manage.component'

export const routes: Routes = [
    { path: '**', component: ClienteManageComponent }
];

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service'

@Component({
  selector: 'app-cliente-manage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cliente-manage.component.html',
  styleUrls: ['./cliente-manage.component.css']
})
export class ClienteManageComponent implements OnInit {
  currentSection: string = 'login';

  usuario: string = '';
  senha: string = '';
  cliente = { cnpj: '', razaoSocial: '', usuario: '', senha: '', status: 'ATIVO' };
  cnpjExcluir: string = '';
  cnpjBuscar: string = '';
  clienteBuscado: any;
  clientes: any[] = [];
  username: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}

  setCurrentSection(section: string) {
    this.currentSection = section;
  }

  login() {
    this.clienteService.login(this.usuario, this.senha).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.username = this.usuario;
        localStorage.setItem('username', this.usuario);
        alert(`Bem-vindo, ${this.usuario}!`);
        this.setCurrentSection('clientes');
      },
      error => {
        alert('Login falhou! Verifique suas credenciais.');
      }
    );
  }
  

  criarCliente() {
    this.clienteService.criarCliente(this.cliente).subscribe(
      response => {
        alert('Cliente criado com sucesso!');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Falha ao criar cliente!');
      }
    );
  }

  excluirCliente() {
    this.clienteService.excluirCliente(this.cnpjExcluir).subscribe(
      () => {
        alert('Cliente excluído com sucesso!');
      },
      error => {
        alert('Falha ao excluir cliente!');
      }
    );
  }

  buscarCliente() {
    this.clienteService.buscarClientePorCnpj(this.cnpjBuscar).subscribe(
      response => {
        this.clienteBuscado = response;
      },
      error => {
        alert('Cliente não encontrado!');
      }
    );
  }

  listarClientes() {
    this.clienteService.listarTodosClientes().subscribe(
      response => {
        this.clientes = response;
      },
      error => {
        alert('Falha ao carregar clientes!');
      }
    );
  }
}

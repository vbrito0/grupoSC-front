export class Cliente {

    cnpj: string;
    razaoSocial: string; 
    usuario: string;
    senha: string;
    status: Status;

    constructor(cnpj: string, razaoSocial: string, usuario: string, senha: string, status: Status) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.usuario = usuario;
        this.senha = senha;
        this.status = status;
    }
}

export enum Status {
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO'
}

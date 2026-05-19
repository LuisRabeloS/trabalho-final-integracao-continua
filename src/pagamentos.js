
export class ServicoDePagamentos {
    constructor() {
        this.pagamentosEfetuados = []
    }

    realizaPagamentos(codigo, empresa, valor) {
        if (valor <= 0 || valor == null) {
            throw new Error('Valor inválido')
        }
        if (!codigo) {
            throw new Error('Código inválido')
        }
        if (!empresa) {
            throw new Error('Empresa inválida')
        }
        if (valor > 100) {
            this.pagamentosEfetuados.push({ codigo: codigo, empresa: empresa, valor: valor, categoria: "cara" })
        } else {
            this.pagamentosEfetuados.push({ codigo: codigo, empresa: empresa, valor: valor, categoria: "padrão" })
        }
    }

    consultaPagamentos() {
        return this.pagamentosEfetuados.at(-1)
    }
}
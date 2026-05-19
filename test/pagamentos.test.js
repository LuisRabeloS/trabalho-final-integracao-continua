import { ServicoDePagamentos } from '../src/pagamentos.js'
import assert from 'node:assert'

const servicoDePagamentos = new ServicoDePagamentos();

describe('Testes da classe de pagamentos', () => {
    describe('Testes da funcao realizaPagamentos', () => {
        it('Deve realizar um pagamento com categoria padrão', () => {
            servicoDePagamentos.realizaPagamentos('12345', 'Nubank', 100.00)
            const resultado = servicoDePagamentos.consultaPagamentos()
            const esperado = { codigo: '12345', empresa: 'Nubank', valor: 100.00, categoria: "padrão" }
            assert.deepEqual(resultado, esperado)
        });
        it('Deve realizar um pagamento de categoria cara', () => {
            servicoDePagamentos.realizaPagamentos('67890', 'Itau', 100.01)
            const resultado = servicoDePagamentos.consultaPagamentos()
            const esperado = { codigo: '67890', empresa: 'Itau', valor: 100.01, categoria: "cara" }
            assert.deepEqual(resultado, esperado)
        });
        it('Validar erro ao passar valor 0', () => {
            assert.throws(() => {
                servicoDePagamentos.realizaPagamentos('67890', 'Itau', 0)
            },
                {
                    message: 'Valor inválido'
                }
            )
        });
        it('Validar erro ao passar valor null', () => {
            assert.throws(() => {
                servicoDePagamentos.realizaPagamentos('82631', 'Mercado Livre', null)
            }, {
                message: 'Valor inválido'
            }
            )
        });
        it('Validar erro ao passar código null', () => {
            assert.throws(() => {
                servicoDePagamentos.realizaPagamentos(null, 'Neon', 121)
            },
                {
                    message: 'Código inválido'
                }
            )
        });
        it('Validar erro ao passar empresa null', () => {
            assert.throws(() => {
                servicoDePagamentos.realizaPagamentos('43610', null, 37.90)
            },
                {
                    message: 'Empresa inválida'
                }
            )
        });
    });
    describe('Testes da funcao consultaPagamentos', () => {

    it('Deve consultar o último pagamento realizado', () => {

        servicoDePagamentos.realizaPagamentos(
            '99999',
            'PicPay',
            50
        )

        const resultado =
            servicoDePagamentos.consultaPagamentos()

        const esperado = {
            codigo: '99999',
            empresa: 'PicPay',
            valor: 50,
            categoria: 'padrão'
        }

        assert.deepEqual(resultado, esperado)
    })
})
})
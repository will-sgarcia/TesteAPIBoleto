import { recuperarDataExpiracaoConvenio, recuperarValorConvenio, recuperarCodigoBarrasConvenio } from './boletoConvenio.js'
import { recuperarDataExpiracaoTitulo, recuperarValorTitulo, recuperarCodigoBarrasTitulo } from './boletoTitulo.js'

const validarBoletoService = {
  validarBoleto: (linhaDigitavel) => {
    //Validar se é apenas número
    if (!isNaN(Number(linhaDigitavel))) {
      if (linhaDigitavel.length === 48) {
        //Boleto convenio

        //Pegar data de expiração
        const dataExpiracao = recuperarDataExpiracaoConvenio(linhaDigitavel)

        //Pegar valor do boleto
        const valor = recuperarValorConvenio(linhaDigitavel)

        //Pegar valor do código de barras
        const codigoBarras = recuperarCodigoBarrasConvenio(linhaDigitavel)

        return {
          barCode: codigoBarras,
          amount: valor,
          expirationDate: dataExpiracao
        }
      }
      else if (linhaDigitavel.length === 47) {
        //Boleto titulo

        //Pegar data de expiração
        const dataExpiracao = recuperarDataExpiracaoTitulo(linhaDigitavel)

        //Pegar valor do boleto
        const valor = recuperarValorTitulo(linhaDigitavel)

        //Pegar valor do código de barras
        const codigoBarras = recuperarCodigoBarrasTitulo(linhaDigitavel)

        return {
          barCode: codigoBarras,
          amount: valor,
          expirationDate: dataExpiracao
        }
      }
      else {
        return {
          error: "Tamanho do boleto inválido."
        }
      }
    }
    else {
      return {
        error: "Boleto deve conter apenas números."
      }
    }
  }
}

export default validarBoletoService;

export function recuperarDataExpiracaoTitulo(linhaDigitavel) {
  const ultimosDigitos = linhaDigitavel.slice(33, 47)

  const fatorExpiracao = ultimosDigitos.slice(0, 4)

  const dataBase = new Date("10-07-1997")

  dataBase.setDate(dataBase.getDate() + parseInt(fatorExpiracao))

  return dataBase
}

export function recuperarValorTitulo(linhaDigitavel) {
  const valor = linhaDigitavel.slice(37, 47)

  return parseFloat(valor) / 100
}

export function recuperarCodigoBarrasTitulo(linhaDigitavel) {
  const banco = linhaDigitavel.slice(0, 3)
  const moeda = linhaDigitavel.slice(3, 4)
  const digitoVerificador = linhaDigitavel.slice(32, 33)
  const dataExpiracao = linhaDigitavel.slice(33, 37)
  const valor = linhaDigitavel.slice(37, 47)
  const campoUm = linhaDigitavel.slice(4, 9)
  const campoDois = linhaDigitavel.slice(10, 20)
  const campoTres = linhaDigitavel.slice(21, 31)

  return banco + moeda + digitoVerificador + dataExpiracao + valor + campoUm + campoDois + campoTres
}

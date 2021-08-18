export function recuperarDataExpiracaoConvenio(linhaDigitavel) {
  const data = linhaDigitavel.slice(24, 32)

  const ano = data.slice(0, 4)

  let dataExpiracao = null;

  if (ano >= 2000 && ano <= 2100) {
    const mes = data.slice(4, 6)

    const dia = data.slice(6, 8)

    return dataExpiracao = new Date(ano + '-' + mes + '-' + dia)
  }

  return dataExpiracao
}

export function recuperarValorConvenio(linhaDigitavel) {
  const valor = linhaDigitavel.slice(5, 16)

  return parseFloat(valor) / 100
}

export function recuperarCodigoBarrasConvenio(linhaDigitavel) {
  const campoUm = linhaDigitavel.slice(0, 11)
  const campoDois = linhaDigitavel.slice(12, 23)
  const campoTres = linhaDigitavel.slice(24, 35)
  const campoQuatro = linhaDigitavel.slice(36, 47)

  return campoUm + campoDois + campoTres + campoQuatro
}


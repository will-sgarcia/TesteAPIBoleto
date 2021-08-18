import express from 'express';
import validarBoletoService from './services/validarBoletoService.js'

const routers = express.Router();

routers.get('/boleto/:linhaDigitavel', (req, res) => {
  const retorno = validarBoletoService.validarBoleto(req.params.linhaDigitavel)

  if (retorno.error) {
    res.status(400).json(retorno.error)
  } else {
    res.status(200).json(retorno)
  }
})

export default routers;

const express = require('express');
/* importar o módulo do consign */
const consign = require('consign');
/* importar o módulo do body-parser */

const app = express();
/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');
/* configurar o middleware express.static */
app.use(express.static('./app/public'));
/* configurar o middleware body-parser */
/* configurar o middleware express-session */

consign()
	.include('app/routes')
	.then('app/controllers')
	.into(app);
//middleware q faz a captação de 404 (paginas) 
app.use(function (req, res, next) {
	res.status(404).render('404')
});

/* exportar o objeto app */
module.exports = app;
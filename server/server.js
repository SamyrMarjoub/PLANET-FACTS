const express = require('express');
const consign = require('consign');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));

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

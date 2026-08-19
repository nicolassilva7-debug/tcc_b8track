require('dotenv').config();

const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuarioroutes');
const motocicletaRoutes = require('./routes/motocicletaroutes');
const modificacaoRoutes = require('./routes/modificacaoroutes');
const trackDayRoutes = require('./routes/trackdayroutes');
const sessaoRoutes = require('./routes/sessaoroutes');
const tempoDeVoltaRoutes = require('./routes/tempodevoltaroutes');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(motocicletaRoutes);
app.use(modificacaoRoutes);
app.use(trackDayRoutes);
app.use(sessaoRoutes);
app.use(tempoDeVoltaRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API B8 TRACK está funcionando!'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor B8 TRACK rodando na porta ${PORT}`);
});
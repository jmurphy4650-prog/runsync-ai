
const express = require('express');
const bodyParser = require('body-parser');

const stravaWebhook = require('./routes/stravaWebhook');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());

app.use('/webhook/strava', stravaWebhook);
app.use('/auth', authRoutes);

app.get('/', (req,res)=>res.send("RunSync AI is running."));

module.exports = app;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const config = require('./config/config.json');
const defaultConfig = config.development;

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

routes(router);

const options = { useNewUrlParser: true, poolSize: 10 };

mongoose.connect(`mongodb://${defaultConfig.url}:${defaultConfig.port}/${defaultConfig.database}`, options);
const connection  = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port ${defaultConfig.port}`));
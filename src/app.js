import express from 'express';
import routers from './routers.js'

const app = express();

app.use('/', routers);

app.listen(8081);

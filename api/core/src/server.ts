import express from 'express';

import {routes} from "./routes";


const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use('/', routes)

app.get('/', function (req: any, res: any) {
    res.send('Hello!');
});

if (!module.parent) {
    app.listen(port);
    console.log('Express started on port 3000');
}

export default app;
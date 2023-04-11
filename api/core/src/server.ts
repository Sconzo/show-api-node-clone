import express from 'express';

import {routes} from "./routes";


const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const allowedOrigins = ['http://localhost:3000', 'https://great-volleyball-gold-ireland.bohr.io'];
type CorsCallback = (error: Error | null, success: boolean) => void;
app.use(cors({
    origin: "*"
}));

app.use('/', routes)

app.get('/', function (req: any, res: any) {
    res.send('Hello!');
});

if (!module.parent) {
    app.listen(port);
    console.log('Express started on port 3000');
}

export default app;
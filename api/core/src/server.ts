import express from 'express';

import {routes} from "./routes";


const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];
type CorsCallback = (error: Error | null, success: boolean) => void;
app.use(cors({
  origin: function (origin : string, callback: CorsCallback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'),false);
    }
  }
}));

app.use('/',routes)

app.get('/' ,function(req:any, res:any){
  res.send('Hello!');
});

if (!module.parent) {
  app.listen(port);
  console.log('Express started on port 3000');
}

export default app;
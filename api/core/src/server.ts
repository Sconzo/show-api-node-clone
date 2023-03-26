import express from 'express';
import {routes} from "./routes";


const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const cors = require('cors');

const corsOptions = {
  origin : ["https://great-volleyball-gold-ireland.bohr.io", "http://localhost:5173"],
  allowedHeaders : "Content-Type",
  methods: ["GET","POST"]
};
app.use(cors(corsOptions));
app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/',routes)

app.get('/', function(req:any, res:any){
  res.send('Hello!');
});

if (!module.parent) {
  app.listen(port);
  console.log('Express started on port 3000');
}

export default app;
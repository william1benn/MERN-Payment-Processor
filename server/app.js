require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const stripe = require("stripe")("sk_test_j8s4CsAyn22jIGhbjmVG0tqh00XkCOAEFx");



mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


const app = express();

app.use(cors({
  credentials: true, //Change to true for auth
  origin: ['http://localhost:3000', 'https://invoice-paymentprocessor.herokuapp.com/']
}));



// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Accepts Json Data 
app.use(express.json({extended:false}));

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


const index = require('./routes/index');
app.use('/', index);

const userRoutes = require('./routes/userRoute');
app.use('/users', userRoutes);

const auth = require('./routes/auth');
app.use('/auth',auth);

const invoice = require('./routes/invoice');
app.use('/invoice',invoice);

const pdf = require('./routes/pdfview')
app.use('/pdf',pdf)

//To merge react and express

const root = path.join(__dirname, 'public/');
app.use(express.static(root));

app.use((req, res, next) => {
    if (
        req.method === 'GET' &&
        req.accepts('html') &&
        !req.is('json') &&
        !req.path.includes('.')
    ) {
        res.sendFile('index.html', { root });
    } else next();
});

module.exports = app;

require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport = require('./config/passport.js')
const session = require('express-session')
const bcrypt       = require('bcrypt')
const { checkLoggedUser } = require('./middlewares/auth')
const flash = require('connect-flash')
const LocalStrategy = require("passport-local").Strategy
const User = require('./models/User')

mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();
app.use(
  session({
    secret: process.env.SESSION,
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60* 24
    }
  })
  )

  
  app.use(flash())
  passport.use(new LocalStrategy({
    passReqToCallback: true
  },(req,username, password, next) => {    
    
    User.findOne({ username}, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }
      
      return next(null, user);
    });
  }));
  
  app.use(passport.initialize())
  app.use(passport.session())
  
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerPartials(`${__dirname}/views/partials`)

// default value for title local
app.locals.title = 'Recipes4You';
app.locals.loggedUser = false;

const index = require('./routes/index');
app.use('/', checkLoggedUser, index);

app.use('/recipes', require('./routes/recipesRoutes'));
app.use('/admin', require('./routes/adminRoutes'))

module.exports = app;

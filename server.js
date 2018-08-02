const express = require('express')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')

var bodyParser = require('body-parser')
const app = express()

app.use(express.static('dist'));


app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true // enable set cookie
  }));

app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
    secret: 'puki muki',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

const addItemsRoutes = require('./routes/itemsRoute')
addItemsRoutes(app)

const addUserRoutes = require('./routes/userRoute')
addUserRoutes(app)

const addReviewRoutes = require('./routes/reviewRoute')
addReviewRoutes(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`App listening on port ${port}!`)
});
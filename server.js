const express = require('express')

const app = express()
app.use(express.static('frontend'));

// ******
var http = require('http').Server(app);
var io = require('socket.io')(http);
// ******

var cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
var bodyParser = require('body-parser')



// ************************************************
// var app = require('express')();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/chatSocket.vue');
});
// ****************************************8

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

//  *********************************************************

io.on('connection', function (socket) {
    
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat join', function (nickname) {
        io.emit('chat connected', nickname);
    });
    socket.on('chat send-message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
        setTimeout(()=>{
            io.emit('chat message', 'Support: Sure, why not?');
        }, 2000)
    });
});

http.listen(3456, function () {
    console.log('listening on *:3456');
});

// ************************************************
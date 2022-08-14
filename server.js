 // export external modules 

const { rootCertificates } = require('tls');

var app = require('express')();             // creates express application
var http = require('http').Server(app);     // allows node for http protocol
var io = require('socket.io')(http);           
const {MongoClient} = require('mongodb');

/*

*/
app.get('/', function (req, res)  {     // routes home page to this callback where the html for the home page is stored.
    res.sendFile('./index.html',{ root: __dirname });
});

// io.on('connection', function (socket) {      // when connected, we do this:
//     console.log('user connected');
//     socket.on('chat message', function (msg) {
//         io.emit('chat message', msg);
//     });
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
// });

http.listen(3000, function () {
    console.log('listening on *:3000');
});
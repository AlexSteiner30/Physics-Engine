const express = require('express');

const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('template');
});

app.get('/engine', function(req, res){
    res.render('engine');
});

app.listen(port=PORT, ()=>{
    console.log("Server is running on localhost:" + PORT);
});
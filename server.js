const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const router = express.Router();
const port = process.env.PORT || 5100

// app.use(express.static(path.join(__dirname, 'public')));
// setting the public static files for the view engiene 
app.use(express.static('.'));
// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

router.get('/', (req, res) => {
res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('*', (req, res) => {
    res.send('404! You are lost try finding the path again ');
  });

// adding the routes

app.use('/' , router);
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
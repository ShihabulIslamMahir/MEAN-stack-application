//express app (node.js server side app)
//import express
const express = require('express');
const bodyParser = require('body-parser');
//import mongoose
const mongoose = require('mongoose');
//import mongoose model
const Post = require('./models/post');

//connect with Mongodb and  return promise
mongoose.connect("mongodb+srv://Mahir:QieXZrPh6ttcKSA0@cluster0-iiiiw.mongodb.net/mean-stack-project?retryWrites=true&w=majority")
.then(()=>{
  console.log("Connected to database!");
})
.catch(()=>{
  console.log("Connection failed!");
})
//handling a request for a single special url only

//creating express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

//add header
//Access-Control-Allow-Origin header key and * is value
//* is allow to all domain for access to our resources
app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS" );
  next();

});

//Middleware for post request

app.post('/api/posts', (req,res,next) =>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  //save automatic create right query for our database
  post.save();

  res.status(201).json({
    message: 'Posts added successfully!',
  });
});






//It's(express) a big chain of middleware we applied incoming requests
//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.
//app.use(middleware) is called every time a request is sent to the server
//add middleware function (middleware is like a bridge)
//app.use((req,res,next) =>{
  //console.log('first middleware');
  //if here is next() function then request will continues it's journey
  //next();
//});
//endpoint: /api/posts
app.get('/api/posts',(req,res,next) =>{
//Post model
//find() for all entries
  Post.find().then(documents =>{
    //status(200) for success
    res.status(200).json({
  message: 'Posts fetched successfully!',
  posts: documents
});
});
  });



  //send() method is send back response easily
 //res.send("Hello from express!");
//turn data in json format as no database

// const posts = [
//   {
//   id: '1234556',
//   title: 'First server side post',
//   content: 'this is coming from server'
// },
// {
//   id: '23234556',
//   title: 'second server side post',
//   content: "this is coming from server!"
// }
// ];


//wire up with server
//export

module.exports = app;
